module.exports = {
  rules: {
    // warn on use of console
    'no-console': 1,
    // disallow constant expressions in conditionals
    'no-constant-condition': 2,
    // disallow control characters in regular expressions
    'no-control-regex': 2,
    // disallow debugger statements
    'no-debugger': 2,
    // disallow duplicate arguments
    'no-dupe-args': 2,
    // disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // disallow duplicate keys in objects
    'no-dupe-keys': 2,
    // disallow reassigning exceptions in catch clause
    'no-ex-assign': 2,
    // disallow extra boolean casts
    'no-extra-boolean-cast': 2,
    // disallow extra semicolons
    'no-extra-semi': 2,
    // disallow variable declarations function body
    'no-inner-declarations': [2, 'both'],
    // disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 2,
    // disallow irregular whitespace
    'no-irregular-whitespace': 2,
    // disallow negated left operand of in operator
    'no-negated-in-lhs': 2,
    // disallow globalobject function calls
    'no-obj-calls': 2,
    // disallow redeclaring variables
    'no-redeclare': [2, {'builtinGlobals': true}],
    // disallow unicode byte order mark
    'unicode-bom': 2,
    // enforce comparing typeof expressions against valid strings
    'valid-typeof': 2
  }
};
