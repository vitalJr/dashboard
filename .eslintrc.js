module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/require-default-props': 'off',
    'import/order': ['warn'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],

    'no-unused-vars': ['warn'],
    'import/no-named-as-default': ['off'],
    'import/prefer-default-export': ['off'],
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['then'],
      },
    ],
    'no-plusplus': 'off',
    'no-param-reassign': [2, { props: false }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
