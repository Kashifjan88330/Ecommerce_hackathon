import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
module.exports = {
  images: {
    domains: ['s3-alpha-sig.figma.com', 'via.placeholder.com'], // Add any other image sources you're using here
  },
};
