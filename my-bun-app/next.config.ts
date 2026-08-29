import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/tech", destination: "/" },
    ];
  },
};

export default nextConfig;
