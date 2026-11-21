/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // fully static site -> ./out
  images: { unoptimized: true },
  trailingSlash: true,
};
module.exports = nextConfig;
