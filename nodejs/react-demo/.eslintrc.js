module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
	  "eslint:recommended",
	  'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react',
		"unused-imports",
	],
	rules: {
		indent: ['error', 'tab'],
		'no-mixed-spaces-and-tabs': [0],
		'no-tabs': [0],
		semi: ['error', 'always'],
		"unused-imports/no-unused-imports-ts": "error",
	},
	root: true,
	settings: {
		react: {
			version: "detect"
		}
	}
};
