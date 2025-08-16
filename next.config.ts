
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack to avoid symlink issues in Replit
  experimental: {
    turbo: false,
  },
  // Configure allowed dev origins for Replit
  allowedDevOrigins: [
    '*.replit.dev',
    '*.repl.co',
    'localhost:3000'
  ],
  // Enable standalone output for better Replit compatibility
  output: 'standalone',
  // i18n configuration
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: true,
  },
};

export default nextConfig;
