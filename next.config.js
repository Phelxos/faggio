/** @type {import('next').NextConfig} */

const { parsed: localEnv } = require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
  env: {
    DEEPL_API_KEY: localEnv.DEEPL_API_KEY,
  },
};

module.exports = nextConfig;
