module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended', 'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'no-param-reassign': ['error', { props: false }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id']
      }
    }],
    'no-alert': ['off'],
    'no-restricted-globals': ['error', 'event', 'fdescribe']
  }
}
