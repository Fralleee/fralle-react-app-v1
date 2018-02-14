const webpack = require('webpack')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin
const path = require('path')
const paths = require('./paths')

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: ['babel-polyfill', paths.serverIndexJs,],
  target: 'node',
  output: {
    path: paths.serverBuild,
    publicPath: '/',
    filename: 'server.js',
    devtoolModuleFilenameTemplate: info => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js)$/,
        include: paths.serverSrc,
        loader: 'babel-loader',
        options: {
          compact: true,
        },
      },
    ],
  },
  plugins: [
    new WebpackBundleSizeAnalyzerPlugin('plugin-report.txt'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
}
