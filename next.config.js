/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    outputFileTracingExcludes: {
      '/*': ['./node_modules', './public']
    }
  }
}

module.exports = nextConfig
