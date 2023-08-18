import { pb } from 'libs/pocketbase'

const SinglePost = async ({ params }: { params: { slug: string } }) => {
  const data = await pb
    .collection('posts')
    .getFirstListItem(`slug="${params.slug}"`, {
      expand: 'speaker,categories',
    })

  return (
    <div>
      SinglePost: {params.slug}
      <pre
        dir="ltr"
        className="whitespace-pre-wrap p-2 bg-slate-700 text-slate-50 text-left"
      >
        {JSON.stringify(data)}
      </pre>
    </div>
  )
}

export default SinglePost
