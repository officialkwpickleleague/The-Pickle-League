import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product/community photos will be served from an R2 public bucket domain.
    // Add that domain here once R2 is connected, e.g. "media.thepickleleague.com"
    remotePatterns: [],
  },
};

export default nextConfig;
