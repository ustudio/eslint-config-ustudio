module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style'
  ].map(require.resolve),
  rules: {
    strict: 0
  },
  env: {
    jest: true
  }
};
