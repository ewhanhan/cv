import type { NextConfig } from 'next';

const nextConfig = {
  // React 19 features
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Build optimizations
  compiler: {
    reactRemoveProperties: true,
  },

  // Security & headers
  poweredByHeader: false,
} satisfies NextConfig;

export default nextConfig;
