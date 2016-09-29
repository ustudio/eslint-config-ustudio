module.exports = {
  env: {
    node: true
  },
  rules: {
    // enforce require() on the top-level module scope
    'global-require': 2,
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': 2,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2
  }
};
