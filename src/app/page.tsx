import { pb } from 'libs/pocketbase'
import Image from 'next/image'

const Page = async () => {
  const posts = await pb.collection('posts').getFullList({
    sort: '-created',
  })

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <div>
            <h1 className="text-3xl font-bold underline">id: {post.id}</h1>
          </div>
          <div>title: {post.title}</div>
          <div>slug: {post.slug}</div>
          <div>updated: {post.updated}</div>
          <div>
            <Image
              alt={post.title}
              src={pb.files.getUrl(post, post.thumbnail, { thumb: '100x250' })}
              width={100}
              height={100}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
