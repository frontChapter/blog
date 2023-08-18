const LatestPosts = async () => {
  // const [first, posts] = (await pb.collection('posts').getList(1, 5)).items

  return (
    <section>
      <div className="container flex flex-col gap-5 px-5 mx-auto md:flex-row sm:px-0">
        {/* <div className="w-full md:w-6/12">
          <div className="relative card w-fit h-fit font-work">
            <div className="min-h-[370px] sm:min-h-[660px]">
              <figure className="h-full max-w-full">
                <Image
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  width={660}
                  height={660}
                  alt={first.title}
                  src={pb.files.getUrl(first, first.thumbnail, {
                    thumb: '660x660',
                  })}
                />
              </figure>
            </div>
            <div className="absolute bottom-0 z-20 w-full gap-0 p-5 card-body rounded-xl sm:p-10">
              <div className="flex flex-wrap items-center gap-1.5">
                {first.categories.map((category) => (
                  <Link key={category.id} href={`/category/${category.id}`}>
                    <div className="border-0 rounded-md badge bg-primary">
                      {category.title}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <a href="/single-post">
                  <h2 className="text-lg font-semibold transition sm:text-xl line-clam-3 md:text-3xl lg:text-4xl text-neutral-content hover:text-primary hover:duration-300 line-clamp-3">
                    {first.title}
                  </h2>
                </a>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <div className="flex items-center gap-3 ">
                  <div className="avatar">
                    <div className="rounded-full w-9">
                      <img
                        alt="author"
                        loading="lazy"
                        width={100}
                        height={100}
                        decoding="async"
                        data-nimg={1}
                        srcSet="/_next/image?url=%2Fimages%2Fuser-avatar.png&w=128&q=75 1x, /_next/image?url=%2Fimages%2Fuser-avatar.png&w=256&q=75 2x"
                        src="/_next/image?url=%2Fimages%2Fuser-avatar.png&w=256&q=75"
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  </div>
                  <h5>
                    <a
                      className="font-medium transition text-neutral-content hover:text-primary hover:duration-300"
                      href="/author"
                    >
                      {first.author}
                    </a>
                  </h5>
                </div>
                <p className="text-neutral-content">Dec 27, 2022</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
          </div>
        </div> */}
        {/* <div className="grid w-full grid-cols-1 gap-5 md:w-6/12 sm:grid-cols-2">
          <div className="relative card w-fit h-fit font-work">
            <div className="min-h-[320px]">
              <figure className="h-full max-w-full">
                <img
                  alt="post-thumb"
                  loading="lazy"
                  width={320}
                  height={320}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-xl min-h-[320px] h-full object-cover"
                  srcSet="/_next/image?url=%2Fimages%2Fposts%2Fpost-2.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2Fposts%2Fpost-2.png&w=640&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fposts%2Fpost-2.png&w=640&q=75"
                  style={{ color: 'transparent' }}
                />
              </figure>
            </div>
            <div className="absolute bottom-0 z-20 w-full gap-0 p-6 card-body rounded-xl">
              <div className="flex flex-wrap items-center gap-1.5">
                <a href="/category/right-sidebar">
                  <div className="border-0 rounded-md badge bg-primary">
                    Travel
                  </div>
                </a>
              </div>
              <div className="mt-3">
                <a href="/single-post">
                  <h2 className="text-lg font-semibold transition line-clam-3 text-neutral-content hover:text-primary hover:duration-300 line-clamp-3">
                    6 Things You Must See Before Visiting Europe
                  </h2>
                </a>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default LatestPosts
