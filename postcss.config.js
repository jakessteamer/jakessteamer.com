/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// Plugins for postcss-loader
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = { plugins: [tailwindcss, autoprefixer] };
