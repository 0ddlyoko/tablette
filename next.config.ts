import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.thecatapi.com",
      },
      {
        protocol: "https",
        hostname: "**.thedogapi.com",
      },
    ],
  },
};

export default nextConfig;
