/* eslint-disable global-require */
/* eslint-disable no-use-before-define */

module.exports = {
  target: "serverless",
  future: {
    strictPostcssConfiguration: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
