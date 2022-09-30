/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'http://localhost:4000'
      }
    ]
  }
}

module.exports = nextConfig
