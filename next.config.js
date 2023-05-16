/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
