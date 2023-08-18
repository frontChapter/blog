import { pb } from 'libs/pocketbase'
import Image from 'next/image'
import Link from 'next/link'

const SESSIONS_CATEGORY_ID = 'r6iwythfu1s23e1'

const LatestSessions = async () => {
  const sessions = (
    await pb.collection('posts').getList(1, 4, {
      expand: 'speaker',
      sort: '-created',
      filter: `categories ~ "${SESSIONS_CATEGORY_ID}"`,
    })
  ).items

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-8">
        <h5 className="text-2xl font-bold">آخرین جلسات</h5>
        <Link
          className="text-xs btn-sm font-light block h-full py-2 px-4 text-gray-800 hover:bg-gray-200 transition-all rounded"
          href={`/category/${SESSIONS_CATEGORY_ID}`}
        >
          مشاهده‌ی تمام جلسات
        </Link>
      </div>
      <div className="container mx-auto px-5 sm:px-0">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 row-auto justify-items-center">
          {sessions.map((session) => (
            <div key={session.id} className="card group relative w-fit h-fit">
              <div className="min-h-[320px] filter saturate-50 group-hover:saturate-200 transition-all">
                <figure className="h-full max-w-full">
                  <Image
                    alt={session.title}
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={320}
                    src={pb.files.getUrl(session, session.thumbnail)}
                    className="rounded-xl min-h-[320px] h-full object-cover"
                  />
                </figure>
              </div>
              <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-20 p-6">
                <div className="flex flex-wrap items-center gap-1.5">
                  {session.expand.speaker?.map((item) => (
                    <Link key={item.id} href={item.link || '#'}>
                      <div className="badge text-white bg-primary border-0 rounded-md text-xs font-light">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2">
                  <Link href={`/posts/${session.slug}`}>
                    <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                      {session.title}
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestSessions
