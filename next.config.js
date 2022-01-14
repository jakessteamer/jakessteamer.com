/* eslint-disable global-require */
/* eslint-disable no-use-before-define */

module.exports = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    return config;
  },
};
