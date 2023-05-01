module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'no-console': 'off',
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: true,
      allowNamedExports: false
    }],
    semi: ['error', 'always', {
      omitLastInOneLineBlock: true
    }],
    'comma-dangle': ['error', 'never'],
    'func-names': 'off',
    'no-plusplus': 'off'
  }
};
