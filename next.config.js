/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pet-name',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
