module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['webpack.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
