/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [process.env.IMAGE_HOST ?? ''],
  },
  trailingSlash: true,
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}
