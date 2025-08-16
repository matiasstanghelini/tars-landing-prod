
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack to avoid symlink issues in Replit
  experimental: {
    turbo: {
      rules: {},
    },
  },
  // Configure allowed dev origins for Replit
  allowedDevOrigins: [
    '*.replit.dev',
    '*.repl.co',
    'localhost:3000'
  ],
  // Enable standalone output for better Replit compatibility
  output: 'standalone',
};

export default nextConfig;
