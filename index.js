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
    // disallow or require dangling commas
    'comma-dangle': [2, 'never'],
    // enforce spacing before and after commas
    'comma-spacing': [2, {'before': false, 'after': true}],
    // enforce comma last style
    'comma-style': [2, 'last'],
    // require dot notation when accessing object properties
    'dot-notation': 2,
    // require type-safe equality operators
    'eqeqeq': [2, 'smart'],
    // enforce tab with using spaces
    'indent': [2, 2, {'SwitchCase': 1}],
    // enforce spacing between keys and values in object literals
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    // require space before and after keywords
    'keyword-spacing': 2,
    // require a capital letter for constructors
    'new-cap': [1, {
      'capIsNew': true,
      'capIsNewExceptions': ['Polymer', 'Q', 'Promise', '$.Deferred', '$.Event']
    }],
    // require parentheses for constructors
    'new-parens': 2,
    // warn on use of console
    'no-console': 1,
    // disallow debugger statements
    'no-debugger': 2,
    // disallow duplicate arguments
    'no-dupe-args': 2,
    // disallow duplicate keys in objects
    'no-dupe-keys': 2,
    // disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // disallow extra boolean casts
    'no-extra-boolean-cast': 2,
    // disallow extra parentheses
    'no-extra-parens': 2,
    // disallow extra semicolons
    'no-extra-semi': 2,
    // disallow variable declarations function body
    'no-inner-declarations': [2, 'both'],
    // disallow irregular whitespace
    'no-irregular-whitespace': 2,
    // disallow if as the only statement in an else block
    'no-lonely-if': 2,
    // disallow mixing spaces and tabs
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple spaces
    'no-multi-spaces': 2,
    // disallow negated left operand of in operator
    'no-negated-in-lhs': 2,
    // disallow use of Object constructor
    'no-new-object': 2,
    // disallow globalobject function calls
    'no-obj-calls': 2,
    // disallow redeclaring variables
    'no-redeclare': [2, {'builtinGlobals': true}],
    // disallow spaces in regular expressions
    'no-regex-spaces': 2,
    // disallow spaces in function calls
    'no-spaced-func': 2,
    // disallow trailing whitespace
    'no-trailing-spaces': 2,
    // disallow
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'after-used'
    }],
    'no-useless-call': 2,
    // require multiple var statements
    'one-var': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    // require single quotes unless you're avoiding escaping
    'quotes': [2, 'single', 'avoid-escape'],
    // require semicolons
    'semi': [2, 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],
    // require space before blocks
    'space-before-blocks': 2,
    // require or disallow a space before function parenthesis
    'space-before-function-paren': [2, 'never'],
    // disallow spaces inside parentheses
    'space-in-parens': 2,
    // require spaces around infix operators
    'space-infix-ops': 2,
    // requires or disallows a whitespace beginning a comment
    'spaced-comment': [2, 'always'],
    'strict': 0,
    'valid-typeof': 2,
    'yoda': [2, 'never']
  }
};
