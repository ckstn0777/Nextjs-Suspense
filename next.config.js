/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    domains: [
      'source.unsplash.com',
      'daisyui.com',
      'thumbnail10.coupangcdn.com',
    ],
  },
}

module.exports = nextConfig
