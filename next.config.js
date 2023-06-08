/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './cfImageLoader.js'
  },
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
