import localFont from 'next/font/local'
import React from 'react'
const estedadFont = localFont({
  src: '../assets/fonts/estedad.woff2',
  display: 'swap',
  variable: '--font-estedad',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className={`${estedadFont.variable}`}>
      <body className="bg-slate-100">
    </html>
  );
}
