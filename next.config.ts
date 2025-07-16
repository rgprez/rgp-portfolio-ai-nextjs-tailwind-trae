import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configure image optimization for Next.js
    // This enables features like automatic image sizing, optimization, and serving WebP/AVIF formats.
    // For more details, see: https://nextjs.org/docs/app/api-reference/components/image
    remotePatterns: [
      // Add any external image hosts here if you use images from external URLs
      // Example: { hostname: 'example.com' }
    ],
  },
    async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

};

export default nextConfig;
