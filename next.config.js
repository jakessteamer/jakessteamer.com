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
};
