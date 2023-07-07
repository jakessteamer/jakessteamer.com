module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: ['prettier'],
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'prettier/prettier': [
			'error',
			{
				tabWidth: 2,
				singleQuote: true,
				useTabs: true,
			},
		],
	},
};
