/* eslint-disable import/no-extraneous-dependencies */

const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    watchContentBase: true,
    publicPath: '/',
    open: {
      app: ['chrome']
    }, // Default open: true. The browser application name is platform dependent. Don't hard code it in reusable modules. For example, 'Chrome' is 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows
    hot: false,
    compress: true,
    overlay: true,
    port: 1234
  },

  module: {
    rules: [
      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        include: paths.images,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      }
    ]
  },

  plugins: [
    // Only update what has changed on hot reload
    new HotModuleReplacementPlugin()
  ]
});
