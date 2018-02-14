const resolve = require('./__webpack/webpack.resolve.js')

// 'off' = 0
// 'warn' = 1
// 'error' = 2

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'jest', 'prettier', 'sort-class-members'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    camelcase: 'error',
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'no-console': 'off', // This should be set to warn in production
    'comma-dangle': ['error', { arrays: 'only-multiline', objects: 'only-multiline' }],
    'max-len': ['error', { code: 180, comments: 200 }],
    'import/no-extraneous-dependencies': ['error'],
    'jsx-quotes': [1, 'prefer-single'],
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'import/no-unresolved': ['error', { ignore: ['./'] }],
    'no-nested-ternary': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': [2, { ignore: ['children', 'style', 'className', 'match', 'history', 'location'] }],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['warn', { argsIgnorePattern: '^action$|^e$|^event$' }],
    'eol-last': 1,
    'react/sort-comp': 0,
    'sort-class-members/sort-class-members': [
      1,
      {
        order: ['[properties]', '[lifecycle]', '[handlers]', '[methods]', '[renders]'],
        groups: {
          handlers: [{ name: '/on.+/', type: 'method' }, { name: '/handle.+/', type: 'method' }],
          lifecycle: [
            'constructor',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ],
          renders: [{ name: '/render.+/', type: 'method' }, { name: 'render', type: 'method' }]
        },
        accessorPairPositioning: 'getThenSet'
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve
        }
      }
    }
  }
}
