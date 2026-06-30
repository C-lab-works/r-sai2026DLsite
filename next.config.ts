import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "r2.r-sai2026.site",
      },
    ],
  },
};

export default nextConfig;
