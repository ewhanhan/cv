import type { NextConfig } from 'next';

const nextConfig = {
  // React 19 features
  experimental: {
    reactCompiler: true,
    typedRoutes: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Build optimizations
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
  },

  // Security & headers
  poweredByHeader: false,
} satisfies NextConfig;

export default nextConfig;
