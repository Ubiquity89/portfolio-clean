/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static exports
  output: 'export',
  // Disable image optimization during export
  images: {
    unoptimized: true,
  },
  // Add any other necessary configurations here
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
