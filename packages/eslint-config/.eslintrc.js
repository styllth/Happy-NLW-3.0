module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript-prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "camelcase": "off",
    'import/prefer-default-export':'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: "always", // new line between groups
        groups: [
          'module',
          '/^@server\/shared/',
          '/^@/',
          '/^~/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { 'order': 'asc', 'ignoreCase': true }
      }
    ]
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect",
    },
  }
};
