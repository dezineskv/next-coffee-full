import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"],
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // "**" to match any subdomain/hostname
      },
    ],
  },
};


