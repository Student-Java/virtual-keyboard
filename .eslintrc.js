module.exports = {
  'extends': 'airbnb-base/legacy',
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    'ecmaVersion': 2018
  },
  'rules': {}
};
