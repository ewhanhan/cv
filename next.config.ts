import type { NextConfig } from 'next';

const nextConfig = {
  // React 19 features
  experimental: {
    reactCompiler: true,
    typedRoutes: true,
  },

  // Build optimizations
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
  },

  // Security & headers
  poweredByHeader: false,

  // Bundle optimization
  transpilePackages: ['lucide-react'],
} satisfies NextConfig;

export default nextConfig;
