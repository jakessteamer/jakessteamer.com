/* eslint-disable import/no-extraneous-dependencies */
const { fontFamily } = require('tailwindcss/defaultTheme');
const tailwindTypography = require('@tailwindcss/typography');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [tailwindTypography]
};
