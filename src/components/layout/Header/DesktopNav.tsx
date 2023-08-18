import { headerNavbar } from 'constants/layout'
import Link from 'next/link'

const DesktopNav = () => {
  return (
    <nav className="hidden col-span-6 xl:block">
      <ul className="flex items-center justify-center w-full gap-8 menu menu-horizontal">
        {headerNavbar.map((item, index) => (
          <li key={item.key} tabIndex={index}>
            <span className="flex items-center gap-1 px-0 py-3 text-base transition bg-transparent hover:text-primary hover:duration-300">
              <Link href={item.href}>{item.label}</Link>
              {!!item.children?.length && (
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              )}
            </span>
            {!!item.children?.length && (
              <ul className="p-0 w-full min-w-[180px] max-w-[230px] bg-white shadow-md rounded-lg z-30">
                {item.children?.map((child) => (
                  <li key={child.key} className="relative block group">
                    <Link
                      className="block px-4 py-3 text-sm whitespace-normal transition border-b border-gray-300 hover:text-primary hover:duration-300"
                      href={child.href}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNav
