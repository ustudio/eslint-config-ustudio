module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/node',
    './rules/es6',
    './rules/react'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
  }
};
