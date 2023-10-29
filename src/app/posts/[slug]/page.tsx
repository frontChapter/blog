import Ad from 'components/Ad'
import Categories from 'components/Categories'
import ImageWithFallback from 'components/ImageWithFallback'
import LatestPosts from 'components/LatestPosts'
import { Breadcrumbs } from 'components/layout'
import jalali from 'libs/jalaliDate'
import { pb } from 'libs/pocketbase'
import Link from 'next/link'
import { Record } from 'pocketbase'

const PostCategories = ({ categories }: { categories: Record | Record[] }) => {
  return categories.map((category) => (
    <Link key={category.id} href={`/category/${category.slug}`}>
      <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4">
        {category.title}
      </div>
    </Link>
  ))
}

const SinglePost = async ({ params }: { params: { slug: string } }) => {
  const data = await pb
    .collection('posts')
    .getFirstListItem(`slug="${params.slug}"`, {
      expand: 'speaker,categories',
    })

  return (
    <div>
      <Breadcrumbs
        items={[
          { title: 'جلسات', href: '/posts' },
          { title: data.title, href: '#' },
        ]}
      />
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
        <div className="col-span-12 lg:col-span-8">
          <div className="py-5">
            <PostCategories categories={data.expand.categories} />
            <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-7 md:leading-10 ">
              {data.title}
            </h3>
            <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
              {data.expand.speaker.map((speaker) => (
                <div className=" flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-9 rounded-full">
                      <ImageWithFallback
                        alt="avatar"
                        loading="lazy"
                        width={100}
                        height={100}
                        decoding="async"
                        src={pb.files.getUrl(speaker, speaker.avatar)}
                        fallbackSrc="/profile.webp"
                      />
                    </div>
                  </div>
                  <Link
                    key={speaker.id}
                    href={`/speakers/${speaker.id}`}
                    className=" text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                  >
                    {speaker.name}
                  </Link>
                </div>
              ))}
              <time dateTime={data.updated} className="text-xs md:text-base">
                {jalali(data.updated)}
              </time>
            </div>
          </div>
          <div className="mt-8">
            <img
              alt="blog_image"
              loading="lazy"
              width={800}
              height={462}
              decoding="async"
              data-nimg={1}
              className="rounded-xl w-full"
              src={pb.files.getUrl(data, data.thumbnail)}
            />
          </div>
          <div className="font-serif">
            <article
              className="py-4"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 justify-center order-last lg:order-none">
          <LatestPosts />
          <Categories />
          <Ad />
        </div>
      </div>
    </div>
  )
}

export default SinglePost
