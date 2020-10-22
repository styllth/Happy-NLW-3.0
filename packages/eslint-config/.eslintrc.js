module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
    'import/prefer-default-export':'off',
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading":"off",
    "react/react-in-jsx-scope": "off",
    "no-undef" : "off",
    "no-console":"off",
    "camelcase":"off",
    "no-unused-vars": "off",
    "no-param-reassign": ["error", { "props": false }],
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreComments": true,
        "ignoreStrings": true,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true,
        "ignoreTrailingComments": true
      }
    ],
    "import-helpers/order-imports": [
      'warn',
      {
        newlinesBetween: "always", // new line between groups
        groups: [
          'module',
          '/^@server\/shared/',
          '/^@/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { 'order': 'asc', 'ignoreCase': true }
      }
    ]
  },
  settings: {
    "import/extensions": [
      ".ts",
      ".tsx"
    ]
  }
};
