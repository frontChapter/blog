/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [process.env.IMAGE_HOST || ''],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}
