/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  optimizeFonts: false,
  experimental: {
    forceSwcTransforms: true,
  }
}
