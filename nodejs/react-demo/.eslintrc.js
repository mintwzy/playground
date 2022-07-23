module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: ['error', 'tab'],
    'no-mixed-spaces-and-tabs': [0],
    'no-tabs': [0],
    semi: ['error', 'always']
  },
  root: true
}
