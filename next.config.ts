
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for better performance
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features not needed for static sites
  poweredByHeader: false,
  reactStrictMode: true,
  // Transpile packages that don't support ESM properly
  transpilePackages: ['ogl', 'gsap'],
  // Remove deprecated options that cause warnings
  experimental: {
    // Remove allowedDevOrigins - this is handled differently in Next.js 15
  },
};

export default nextConfig;
