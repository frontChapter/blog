import { Header } from 'components/layout'
// import { Footer, Header } from 'components/layout'
import localFont from 'next/font/local'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import '../styles/global.css'

const estedadFont = localFont({
  src: '../assets/fonts/estedad.woff2',
  display: 'swap',
  variable: '--font-estedad',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" className={`${estedadFont.variable}`}>
      <body className="bg-slate-100">
        <Header />
        <main className="container px-5 mx-auto sm:px-0">{children}</main>
        <Toaster />
        {/* <Footer /> */}
      </body>
    </html>
  )
}
