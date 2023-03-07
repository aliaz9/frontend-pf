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
    // disable react in scopte
    'react/react-in-jsx-scope': 'off',
    // disable react version
    'react/prop-types': 'off',
    // disable space before function parenthesis
    'space-before-function-paren': 'off',
    // disable new line ternary operator
    'multiline-ternary': 'off'
  }
}
