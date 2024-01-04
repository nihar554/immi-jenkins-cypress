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
    ecmaVersion: 15,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
