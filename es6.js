module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/node',
    './rules/es6'
  ].map(require.resolve),
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
  }
};
