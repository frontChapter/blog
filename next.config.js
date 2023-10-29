/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.IMAGE_HOST ?? 'frontchapter-magic.iran.liara.run',
        protocol: 'https',
      },
    ],
  },
  trailingSlash: true,
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}
