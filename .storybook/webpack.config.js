// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')
const autoprefixer = require('autoprefixer')
const defaultConfig = require('@storybook/react/dist/server/config/webpack.config').default
const resolve = require('../__webpack/webpack.resolve')

module.exports = {
  resolve: Object.assign(defaultConfig.resolve || {}, {
    alias: Object.assign((defaultConfig.resolve && defaultConfig.resolve.alias) || {}, {
      atoms: path.resolve(__dirname, '../app/components/atoms'),
      molecules: path.resolve(__dirname, '../app/components/molecules'),
      organisms: path.resolve(__dirname, '../app/components/organisms'),
      templates: path.resolve(__dirname, '../app/components/templates'),
      components: path.resolve(__dirname, '../app/components'),
      containers: path.resolve(__dirname, '../app/containers'),
      public: path.resolve(__dirname, '../app/public'),
      services: path.resolve(__dirname, '../app/services'),
      shared: path.resolve(__dirname, '../app/components/shared'),
      store: path.resolve(__dirname, '../app/store'),
      styles: path.resolve(__dirname, '../app/styles'),
      tests: path.resolve(__dirname, '../app/tests'),
      utils: path.resolve(__dirname, '../app/utils')
    })
  }),
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(scss|css)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|woff|woff2|eot|ttf|pdf|xps)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    // your custom plugins
  ]
}
