module.exports = {
  rules: {
    // require braces in arrow function body
    'arrow-body-style': [2, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // require space before/after arrow function's arrow
    'arrow-spacing': 2,
    // spacing for generator functions
    'generator-star-spacing': 2,
    // disallow duplicate imports
    'no-duplicate-imports': 2,
    // disallow unnecessary computed property keys on objects
    'no-useless-computed-key': 2,
    // disallow unnecessary constructor
    'no-useless-constructor': 2,
    // disallow renaming of import, export, and destructured assignments to the same name
    'no-useless-rename': 2,
    // disallow es5 variable declarations using var
    'no-var': 2,
    // suggest using object shorthand where applicable
    'object-shorthand': [2, 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using const where applicable
    'prefer-const': 1,
    // use rest parameters instead of arguments
    'prefer-rest-params': 2,
    // use template string over string concatenation
    'prefer-template': 2,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 2,
    // disallow whitespace between spread operators and their expressions
    'rest-spread-spacing': 2,
    // disallow generator functions that do not have yield
    'require-yield': 2,
    // spacing in template strings
    'template-curly-spacing': 2,
    // spacing when yielding in generators
    'yield-star-spacing': [2, 'after']
  }
};
