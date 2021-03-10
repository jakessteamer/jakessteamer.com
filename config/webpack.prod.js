/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    filename: 'assets/js/[name].[contenthash].bundle.js',
    publicPath: '/'
  },
  plugins: [
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    //  Compress image size
    new ImageMinimizerPlugin({
      filename: 'assets/images/[name][ext]',
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 80 }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false
                }
              ]
            }
          ]
        ]
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader', // Or `url-loader` or your other loader
            options: {
              name: 'assets/images/[name].[ext]'
            }
          },
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning', // Ignore errors on corrupted images
              minimizerOptions: {
                plugins: [
                  ['gifsicle', { interlaced: true }],
                  ['mozjpeg', { quality: 80 }],
                  ['jpegtran', { progressive: true }],
                  ['optipng', { optimizationLevel: 5 }],
                  [
                    'svgo',
                    {
                      plugins: [
                        {
                          removeViewBox: false
                        }
                      ]
                    }
                  ]
                ]
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new ImageMinimizerPlugin(), '...'],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime'
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
