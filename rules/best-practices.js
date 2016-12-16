module.exports = {
  rules: {
    // treat var as a block scoped variable
    'block-scoped-var': 2,
    // disallow or require dangling commas
    'comma-dangle': [2, 'never'],
    // require dot notation when accessing object properties
    'dot-notation': 2,
    // enforce newline before dot in object notation broken over multiple lines
    'dot-location': [2, 'property'],
    // require type-safe equality operators
    'eqeqeq': [2, 'smart'],
    // disallow regular expressions that look like division
    'no-div-regex': 2,
    // disallow unnecessary labels
    'no-extra-label': 2,
    // disallow implicit type conversions
    'no-implicit-coercion': 2,
    // disallow if as the only statement in an else block
    'no-lonely-if': 2,
    // disallow use of Object constructor
    'no-new-object': 2,
    // disallow multiple spaces in regular expression literals
    'no-regex-spaces': 2,
    // disallow trailing whitespace
    'no-trailing-spaces': 2,
    // disallow unused variables
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'after-used'
    }],
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 2,
    // disallow Yoda conditions
    'yoda': 2
  }
};
