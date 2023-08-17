import type { LinkProps } from 'next/link'

type TQuickLinks = { label: string; target?: string } & LinkProps

export const quickLinks: TQuickLinks[] = [
  {
    label: 'خانه',
    href: '/',
  },
  {
    label: 'درباره‌ی ما',
    href: '/about-us',
  },
  {
    label: 'ارتباط با ما',
    href: '/contact-us',
  },
  {
    label: 'کانال تلگرام',
    href: 'https://t.me/FrontChapter',
    target: '_blank',
  },
  {
    label: 'گروه تلگرام',
    href: 'https://t.me/FrontChapterGroup',
    target: '_blank',
  },
  {
    label: 'همایش ۱۴۰۰',
    href: 'https://conf1400.frontchapter.ir/',
    target: '_blank',
  },
]

export const headerNavbar = [
  {
    key: '0',
    label: 'خانه',
    href: '/',
    children: [
      {
        key: '0-0',
        label: 'زیر خانه',
        href: '/',
      },
      {
        key: '0-1',
        label: 'زیر خانه 2',
        href: '/',
      },
    ],
  },
  {
    key: '1',
    label: 'ارتباط با ما',
    href: '/',
  },
]
