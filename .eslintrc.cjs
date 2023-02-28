module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // disable react must have prop-types and must be in scope
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // disable space before function parentheses
    'space-before-function-paren': 'off',
    // disable ternary operator in new line
    // disable multiline ternary operator
    'multiline-ternary': 'off'
  }
}
