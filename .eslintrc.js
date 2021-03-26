module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    // es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-named-as-default': 0,
    'import/extensions': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': [2, { caseSensitive: true }],
    'eslint-disable react/no-array-index-key': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/prop-types': 0,
    'no-unused-vars': [
      0,
      {
        argsIgnorePattern: 'next',
      },
    ],
  },
};
