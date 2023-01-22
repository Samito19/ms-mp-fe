/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
