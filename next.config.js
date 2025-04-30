/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ignore all ESLint warnings (including the stylesheet-in-head rule) during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
