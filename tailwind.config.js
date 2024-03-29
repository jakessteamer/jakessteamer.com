/* eslint-disable import/no-extraneous-dependencies */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts}'],
	// darkMode: "class",
	theme: {
		colors: {
			transparent: 'transparent',
			// current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			slate: colors.slate,
			neutral: colors.neutral,
			stone: colors.stone,
			sky: colors.sky,
			blue: colors.blue,
			azure: {
				DEFAULT: '#009BFF',
				50: '#B8E3FF',
				100: '#A3DBFF',
				200: '#7ACBFF',
				300: '#52BBFF',
				400: '#29ABFF',
				500: '#009BFF',
				600: '#0079C7',
				700: '#00578F',
				800: '#003557',
				900: '#00131F',
			},
			yellow: colors.yellow,
		},
		extend: {
			fontFamily: {
				sans: [
					'Inter var, sans-serif',
					{ fontFeatureSettings: '"cv02","cv03","cv04","cv11"' },
				],
			},
		},
	},
	plugins: [typography, forms],
};
