import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable production optimizations
  output: 'export',
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
    images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.centilio.com',
        pathname: '/blog/attachment**',
      },
      {
        protocol: 'https',
        hostname: 'seobot.centilio.com',
        pathname: '/**',
      }
    ],
  }
  
};

export default nextConfig;