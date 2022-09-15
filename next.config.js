/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  optimizeFonts: true,
  images: {
    unoptimized: true,
    allowFutureImage: true
  },
  experimental: {
    forceSwcTransforms: true,
  }
}
