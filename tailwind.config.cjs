const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
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
				sans: ['Inter', ...fontFamily.sans],
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
