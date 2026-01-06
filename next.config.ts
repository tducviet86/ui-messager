import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fdad1-4.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
