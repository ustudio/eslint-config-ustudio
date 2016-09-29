module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style'
  ].map(require.resolve),
  env: {
    browser: true,
    node: false
  }
};
