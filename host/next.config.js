const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  const REMOTE_NEXT_URL = process.env.NEXT_PUBLIC_REMOTE_NEXT_URL || "http://localhost:3001";

  return {
    // specify remotes
    "remote-next": `remote-next@${REMOTE_NEXT_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        exposes: {
          // Host app also can expose modules
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
