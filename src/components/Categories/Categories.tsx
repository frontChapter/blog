import { pb } from 'libs/pocketbase'
import Link from 'next/link'

const Categories = async () => {
  const categories = await pb.collection('categories').getFullList()

  return (
    <div className="rounded-xl border border-base-content border-opacity-10 p-8">
      <h4 className="text-xl font-semibold leading-6 text-base-content">
        دسته‌بندی‌ها
      </h4>
      <div className="pt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between last:border-none border-b border-base-content border-opacity-10 py-3"
          >
            <Link
              className="text-base font-medium text-base-content text-opacity-70 hover:text-primary transition ease-in-out duration-300"
              href={`/category/${category.slug}`}
            >
              {category.title}
            </Link>
            <span className="px-2 py-1 rounded-md bg-primary bg-opacity-5 text-primary text-xs font-medium">
              {category.slug}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
