import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
      {
        protocol: "https",
        hostname: "www.alatrading.com",
      },
    ],
  },
};

export default nextConfig;
