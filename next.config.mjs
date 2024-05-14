import withSerwistInit from '@serwist/next';

/** @type {import('next').NextConfig} */


const withSerwist = withSerwistInit({
  swSrc: '/sw.ts',
  swDest: 'public/sw.js',
});

export default withSerwist({
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Content-Range",
            value: "bytes: 0-9/*",
          },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: [
      "@radix-ui"
    ]
  }
})