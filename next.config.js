/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'kiba-jyoti-site-assets.s3.eu-west-1.amazonaws.com',
      'kiba-jyoti-website-assets.s3.eu-west-1.amazonaws.com',
      'jyotipatelauthor.com',
    ],
  },
}

module.exports = nextConfig
