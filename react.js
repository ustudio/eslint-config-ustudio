module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/node',
    './rules/es6',
    './rules/react'
  ].map(require.resolve),
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
  }
};
