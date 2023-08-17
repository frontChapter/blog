import { pb } from 'libs/pocketbase'

const Page = async () => {
  const posts = await pb.collection('posts').getFullList({
    sort: '-created',
  })

  const comments = await pb.collection('comments').getFullList({
    sort: '-created',
    filter: 'post = "ebhvqq1mk2w51ix"',
  })

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>
            <h1 className="text-3xl font-bold underline">id: {post.id}</h1>
          </div>
          <div>title: {post.title}</div>
          <div>slug: {post.slug}</div>
          <div>updated: {post.updated}</div>
          <div>
            <img
              src={pb.files.getUrl(post, post.tumbnail, { thumb: '100x250' })}
              width={100}
              height={100}
            />
          </div>
          <div>
            comments:
            {comments.map((comment) => (
              <div key={comment.id}>{comment.comment}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
