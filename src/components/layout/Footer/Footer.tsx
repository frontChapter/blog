import { quickLinks } from 'constants/layout'
import { pb } from 'libs/pocketbase'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'

const Footer = async () => {
  const categories = await pb.collection('categories').getFullList({
    sort: '-created',
  })

  return (
    <footer className="font-sans bg-base-200">
      <div className="container px-5 mx-auto md:px-0">
        <div className="grid grid-cols-12 gap-5 py-16">
          <div className="col-span-12 lg:col-span-3">
            <h5 className="font-sans text-lg font-semibold ">درباره‌ی ما</h5>
            <p className="mt-3 mb-6 font-sans text-base leading-7">
              ما بچه‌های فرانت‌چپتر خودمون رو یک جامعه‌‌ی پویا از
              توسعه‌دهنده‌های فرانت‌اند می‌دونیم که تلاش می‌کنیم هر چیزی که یاد
              می‌گیریم رو با هم به اشتراک بذاریم، به صورت گروهی توی پروژه‌های
              آزاد شرکت کنیم و اعضای جامعه رو از تازه واردها تا مرشدهای راه رو
              توی یه محیطی بذاریم که به هم یاد بدن و از هم یاد بگیرن
            </p>
            <div>
              <a
                href="mailto:Support@FrontChapter.ir"
                className="font-sans font-semibold "
              >
                ایمیل :{' '}
                <span
                  dir="ltr"
                  className="font-sans font-normal transition hover:text-primary hover:duration-300"
                >
                  Support@FrontChapter.ir
                </span>
              </a>
            </div>
            <div className="mt-1">
              <a href="tel:+989300516440" className="font-sans font-semibold ">
                تماس :{' '}
                <span
                  dir="ltr"
                  className="font-sans font-normal transition hover:text-primary hover:duration-300"
                >
                  +98 930 051 6440
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-between col-span-12 lg:justify-center lg:gap-20 lg:col-span-5">
            <div>
              <h5 className="font-sans text-lg font-semibold ">دسترسی سریع</h5>
              <div className="flex flex-col mt-6 gap-y-2">
                {quickLinks.map(({ label, ...link }, index) => (
                  <div key={index}>
                    <Link
                      className="font-sans text-base transition link link-hover hover:text-primary hover:duration-300"
                      {...link}
                    >
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-sans text-lg font-semibold ">دسته‌بندی‌ها</h5>
              <div className="flex flex-col mt-6 gap-y-2">
                {categories.map((category) => (
                  <div key={category.id}>
                    <Link
                      className="font-sans text-base transition link link-hover hover:text-primary hover:duration-300"
                      href={`/categories/${category.slug}`}
                    >
                      {category.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Newsletter />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-8 border-t md:gap-0 md:flex-row bg-base-200 ">
          <div className="flex items-center gap-2.5">
            <Link href="/">
              <Image
                src="/frontchapter-icon.svg"
                width={48}
                height={48}
                alt="FrontChapter Logo"
                className="w-12 h-12"
              />
            </Link>
            <div>
              <h4 className="font-sans text-xl ">
                <span className="font-bold">front</span>Chapter
              </h4>
              <p className="mt-0.5 text-base font-sans">© فرانت‌چپتر ۱۴۰۲</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="pl-4 font-sans text-base transition border-l hover:text-primary hover:duration-300"
              href="/"
            >
              مرام‌نامه
            </Link>
            <Link
              className="pl-4 font-sans text-base transition border-l hover:text-primary hover:duration-300"
              href="/"
            >
              قوانین استفاده
            </Link>
            <Link
              className="font-sans text-base transition hover:text-primary hover:duration-300"
              href="/"
            >
              همکاری با ما
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
