/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
