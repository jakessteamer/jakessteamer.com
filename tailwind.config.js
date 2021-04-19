/* eslint-disable import/no-extraneous-dependencies */
const { fontFamily } = require('tailwindcss/defaultTheme');
const tailwindTypography = require('@tailwindcss/typography');
const tailwindcssResponsiveEmbed = require('tailwindcss-responsive-embed');
const tailwindcssAspectRatio = require('tailwindcss-aspect-ratio');

module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans]
            }
        }
    },
    variants: {},
    plugins: [tailwindTypography, tailwindcssResponsiveEmbed, tailwindcssAspectRatio]
};
