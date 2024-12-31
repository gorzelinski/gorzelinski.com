/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source:
          '/:lang/blog/converting-design-tokens-to-css-variables-with-node.js',
        destination:
          '/:lang/blog/converting-design-tokens-to-css-variables-with-node-js',
        permanent: true
      }
    ]
  },
  experimental: {
    outputFileTracingExcludes: {
      '/*': [
        './public',
        './.git',
        './.next/cache/webpack',
        './node_modules/@swc/core-linux-x64-gnu',
        './node_modules/@swc/core-linux-x64-musl',
        './node_modules/@esbuild/linux-x64'
      ]
    }
  }
}

module.exports = nextConfig
