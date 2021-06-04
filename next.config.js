/* eslint-disable global-require */
/* eslint-disable no-use-before-define */

module.exports = {
    target: "serverless",
    strictPostcssConfiguration: true,
    future: {
        webpack5: true,
    },
    poweredByHeader: false,
    webpack: (config, { dev, isServer }) => {
        if (isServer) {
            require("./scripts/generate-sitemap");
        }
        return config;
    },
};
