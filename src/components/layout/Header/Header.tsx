'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import NavOptions from './NavOptions'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)
  const toggleNavbarMobile = () => setIsMobileNavOpen((prev) => !prev)

  return (
    <header className="py-2 bg-white">
      <div className="container px-5 mx-auto sm:px-0">
        <div className="grid grid-cols-12 navbar">
          <div className="col-span-3">
            <Link href="/">
              <Image
                src="/frontchapter.svg"
                alt="FrontChapter Logo"
                className="h-[36px]"
                width={158}
                height={36}
              />
            </Link>
          </div>
          <DesktopNav />
          <NavOptions toggle={toggleNavbarMobile} />
        </div>
        <MobileNav state={[isMobileNavOpen, setIsMobileNavOpen]} />
      </div>
    </header>
  )
}

export default Header
