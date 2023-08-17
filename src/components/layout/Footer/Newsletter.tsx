'use client'
import { joiResolver } from '@hookform/resolvers/joi'
import errorsMessages from 'constants/errors'
import Joi from 'joi'
import { pb } from 'libs/pocketbase'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

type TNewsletterValues = {
  email: string
}

const schema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
})

const Newsletter = () => {
  const [isLoading, setIsLoading] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNewsletterValues>({
    resolver: joiResolver(schema),
  })

  const onSubmit = async (data: TNewsletterValues) => {
    setIsLoading(true)
    pb.collection('newsletter_subscribers')
      .create(data)
      .then(() => toast.success('شادباش! به جمعمون وارد شدی'))
      .catch((err) => {
        Object.entries(err.response.data).forEach(([field, { code }]: any) => {
          toast.error(errorsMessages[field][code])
        })
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="w-full">
      <div className="py-8 bg-base-100 px-9 rounded-xl">
        <p className="text-xl font-semibold text-center">
          ماهنامه‌ی فرانت‌چپتر
        </p>
        <p className="mt-2 text-base text-center">
          اخبار دنیای فرانت‌اند رو از دست ندید!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="relative flex items-center mt-7">
              <input
                {...register('email')}
                placeholder="آدرس ایمیل"
                type="email"
                className="w-full px-4 py-3 border rounded-md outline-none placeholder:text-base bg-base-100 "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute w-5 h-5 left-4 stroke-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <small>{errors?.email?.message}</small>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-3 mt-2 font-medium text-center text-white rounded-md bg-primary disabled:bg-primary-700 disabled:cursor-not-allowed"
          >
            عضویت رایگان!
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
