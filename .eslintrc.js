module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'security', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'standard',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error'
  }
}
