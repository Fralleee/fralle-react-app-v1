const path = require('path')
const webpack = require('webpack')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const autoprefixer = require('autoprefixer')
const paths = require('./paths')
const resolve = require('./webpack.resolve')

module.exports = {
  devtool: 'eval',
  entry: ['babel-polyfill', 'react-hot-loader/patch', 'react-dev-utils/webpackHotDevClient', paths.appIndexJs],
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: 'bundle.min.js',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath)
  },
  resolve,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter
            },
            loader: 'eslint-loader'
          }
        ],
        include: paths.appSrc
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
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
        test: /\.md$/,
        use: 'raw-loader'
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
    new WatchMissingNodeModulesPlugin('node_modules'),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  performance: {
    hints: false
  }
}
