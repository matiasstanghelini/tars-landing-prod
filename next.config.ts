
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for better performance
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure allowed dev origins for Replit
  experimental: {
    allowedDevOrigins: [
      '*.replit.dev',
      '*.repl.co',
      'localhost:3000'
    ]
  },
  // Disable server-side features not needed for static sites
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
