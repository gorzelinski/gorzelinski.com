/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    outputFileTracingExcludes: {
      '/*': ['./public']
    }
  }
}

module.exports = nextConfig
