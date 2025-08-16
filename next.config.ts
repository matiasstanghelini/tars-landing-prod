
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure Turbopack (now stable in Next.js 15)
  turbo: {},
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
