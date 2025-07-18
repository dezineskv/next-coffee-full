import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"],
  },
};

module.exports = {
  images: {
    domains: ["ibb.co/"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*",
        },
      ],
  },
};


