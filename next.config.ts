import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        // 画像のホスト名に合わせて変更してください
        // 例: "example.com" や "drive.google.com" など
        hostname: "r2.r-sai2026.site",
      },
    ],
  },
};

export default nextConfig;
