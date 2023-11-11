import jalali from 'libs/jalaliDate'
import { pb } from 'libs/pocketbase'
import Image from 'next/image'
import Link from 'next/link'

const LatestPosts = async () => {
  const posts = (
    await pb.collection('posts').getList(1, 6, {
      sort: '-created',
    })
  ).items

  return (
    <div className="p-8 border border-gray-200 rounded-xl w-full">
      <h5 className="text-base-content font-bold text-2xl font-work">
        آخرین نوشته‌ها
      </h5>
      <div className="grid grid-cols-1 gap-6 mt-8">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="card-body p-0">
              <div className="flex items-center gap-4 font-work">
                <figure className="flex-none">
                  <Link href={`/posts/${post.title}`}>
                    <Image
                      alt={post.title}
                      loading="lazy"
                      width={110}
                      height={110}
                      decoding="async"
                      className="rounded-md"
                      src={pb.files.getUrl(post, post.thumbnail)}
                    />
                  </Link>
                </figure>
                <div>
                  <h5>
                    <Link
                      className="font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300"
                      href={`/posts/${post.title}`}
                    >
                      {post.title}
                    </Link>
                  </h5>
                  <time
                    dateTime={post.updated}
                    className="mt-2.5 text-base-content/60 text-sm"
                  >
                    {jalali(post.updated)}
                  </time>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestPosts
