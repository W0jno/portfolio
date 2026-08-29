import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/projects/:projectId", destination: "/" },
      { source: "/skills", destination: "/" },
    ];
  },
};

export default nextConfig;
