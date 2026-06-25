import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b1713133.smushcdn.com",
      },
      {
        protocol: "https",
        hostname: "s.w.org",
      },
      {
        protocol: "https",
        hostname: "fintelegram.com",
      },
    ],
  },
};

export default nextConfig;
