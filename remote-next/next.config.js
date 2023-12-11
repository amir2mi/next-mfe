const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote-next",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          // specify exposed pages and components
          "./images": "src/pages/test/images.tsx",
        },
        shared: {
          // specify shared dependencies
          // read more in Shared Dependencies section
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
  images: {
    minimumCacheTTL: 0,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
