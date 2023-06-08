/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },images: {
      loader: 'custom',
      loaderFile: './cfImageLoader.js'
    },
}

module.exports = nextConfig
