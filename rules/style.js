module.exports = {
  rules: {
    // disallow or require spaces inside of array brackets
    'array-bracket-spacing': [2, 'never'],
    // disallow or require spaces inside of single line blocks
    'block-spacing': [2, 'always'],
    // enforce stroustrup brace style
    'brace-style': [2, 'stroustrup'],
    // require camel case variables (not properties)
    'camelcase': [2, {'properties': 'never'}],
    // enforce spacing before and after commas
    'comma-spacing': [2, {'before': false, 'after': true}],
    // enforce comma last style
    'comma-style': [2, 'last'],
    // enforce spacing between keys and values in object literals
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    // require space before and after keywords
    'keyword-spacing': 2,
    // enforce tab width using spaces
    'indent': [2, 2, {'SwitchCase': 1}],
    // enforce consistent line breaking
    'linebreak-style': 2,
    // require a capital letter for constructors
    'new-cap': [1, {
      'capIsNew': true,
      'capIsNewExceptions': ['Polymer', 'Q', 'Promise', '$.Deferred', '$.Event']
    }],
    // require parentheses for constructors
    'new-parens': 2,
    // allow extra parentheses (so you can make your code clearer!!!!)
    'no-extra-parens': 0,
    // disallow mixing spaces and tabs
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple spaces
    'no-multi-spaces': 2,
    // disallow spaces in function calls
    'no-spaced-func': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // enforce consistent line breaks inside braces
    'object-curly-spacing': [2, 'never'],
    // require assignment operator shorthand
    'operator-assignment': 2,
    // require multiple var statements
    'one-var': [2, 'never'],
    // require semicolons
    'semi': [2, 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],
    // require single quotes unless you're avoiding escaping
    'quotes': [2, 'single', 'avoid-escape'],
    // disallow quotes around object literal property names
    'quote-props': [2, 'as-needed'],
    // require object keys to be sorted
    'sort-keys': [0, 'asc', {'caseSensitive': false, 'natural': true}],
    // sort variable declarations
    'sort-vars': [0, {'ignoreCase': true}],
    // require space before blocks
    'space-before-blocks': 2,
    // require or disallow a space before function parenthesis
    'space-before-function-paren': [2, 'never'],
    // disallow spaces inside parentheses
    'space-in-parens': 2,
    // require spaces around infix operators
    'space-infix-ops': 2,
    // requires whitespace beginning a comment
    'spaced-comment': [2, 'always']
  }
};
