// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    outputFileTracingExcludes: {
      '/*': [
        './public',
        './.git',
        './.next/cache/webpack',
        './node_modules/@swc/core-linux-x64-gnu',
        './node_modules/@swc/core-linux-x64-musl'
      ]
    }
  }
}

export default withPlaiceholder(nextConfig)
