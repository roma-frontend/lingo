import withSerwistInit from '@serwist/next';

/** @type {import('next').NextConfig} */


const withSerwist = withSerwistInit({
  scope: "/",
  swSrc: '/sw.ts',
  swDest: 'public/sw.js',
  cacheOnNavigation: true,
  reloadOnOnline: true,
});

export default withSerwist({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
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
      "@radix-ui", "react-use", "lucide-react", "react-circular-progressbar", "react-confetti", "tailwind-animate"
    ]
  }
})