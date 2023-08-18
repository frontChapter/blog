/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [process.env.IMAGE_HOST ?? 'frontchapter-magic.iran.liara.run'],
  },
  trailingSlash: true,
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}
