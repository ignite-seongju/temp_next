const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const pkg = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'next2',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            next1: `next1@http://localhost:3042/_next/static/chunks/remoteEntry.js`,
          },
        }),
        new FederatedTypesPlugin({
          federationConfig: {
            name: 'next2',
            filename: 'static/chunks/remoteEntry.js',
            remotes: {
              next1: `next1@http://localhost:3042/_next/static/chunks/remoteEntry.js`,
            },
          },
        })
      );
    }

    return config;
  },
  shared: {
    'next/config': {
      singleton: true,
      eager: true,
      requiredVersion: pkg.dependencies['next'],
    },
  },
};

module.exports = nextConfig;
