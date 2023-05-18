/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  swcMinify: true,
  images: { unoptimized: true },
  trailingSlash: true,
  compress: true,
};

module.exports = nextConfig;
