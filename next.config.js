/* eslint-disable global-require */
/* eslint-disable no-use-before-define */

module.exports = {
  target: "serverless",
  future: {
    strictPostcssConfiguration: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }
    return config;
  },
};
