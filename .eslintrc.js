module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'react-app'],
  plugins: ['prettier'],
  rules: {
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'no-trailing-spaces': 'error',
    'spaced-comment': ['error', 'always'],
    'jest/valid-title': 'off',
  },
}
