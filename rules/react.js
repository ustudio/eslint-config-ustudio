module.exports = {
  rules: {
    // prevent missing displayName in a React component definition
    'react/display-name': 0,
    // enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 2,
    // enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 0,
    // prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 0,
    // disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // enforce quote style for JSX attributes
    'react/jsx-quotes': 0,
    // enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-prop-types': 0,
    // enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 2,
    // prevent usage of dangerous JSX properties
    'react/no-danger': 2,
    // prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 2,
    // prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // prevent multiple component definition per file
    'react/no-multi-comp': 0,
    // prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // restrict file extensions that may be required
    'react/require-extension': 0,
    // prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // enforce component methods order
    'react/sort-comp': [2, {
      'order': [
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }]
  }
};
