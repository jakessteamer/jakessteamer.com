/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('./paths');

const pages = fs
  .readdirSync(paths.pages)
  .filter((fileName) => fileName.endsWith('.html'));

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [
    // bundle the client for webpack dev server
    'webpack-dev-server/client?http://localhost:3000',
    `${paths.src}/index.js`
  ],
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: '.',
          globOptions: {
            ignore: ['*.DS_Store']
          }
        }
      ]
    }),
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Jake"s Steamer',
      favicon: `${paths.src}/images/favicons/favicon.ico`,
      template: `${paths.src}/index.html`, // template file
      filename: 'index.html' // output file
    }),
    ...pages.map(
      (name) =>
        new HtmlWebpackPlugin({
          title: name.charAt(0).toUpperCase() + name.slice(1, -5),
          favicon: `${paths.src}/images/favicons/favicon.ico`,
          template: `${paths.pages}/${name}`,
          filename: `./${name.replace('.html', '')}/index.html`
        })
    )
  ],
  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      // Fonts Inline files
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      }
    ]
  }
};
