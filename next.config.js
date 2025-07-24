/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static exports for Netlify
  output: 'standalone',
  // Disable server-side rendering at build time
  target: 'serverless',
  // Enable static HTML export
  images: {
    unoptimized: true,
  },
  // Add any other necessary configurations here
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
}

module.exports = nextConfig;
