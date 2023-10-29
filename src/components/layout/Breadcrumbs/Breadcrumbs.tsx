import { isLastIndex } from '@fullstacksjs/toolbox'
import Link from 'next/link'

export type TBreadcrumb = {
  title: string
  href?: string
}

const Breadcrumbs = ({ items }: { items: TBreadcrumb[] }) => {
  return (
    <div className="text-sm breadcrumbs py-8" aria-label="breadcrumb">
      <ul>
        <li>
          <Link className="text-base-content" href="/">
            خانه
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href}>
            {!isLastIndex(items, index) ? (
              <Link className="text-gray-900" href={item.href}>
                {item.title}
              </Link>
            ) : (
              <span className="text-gray-500">{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
