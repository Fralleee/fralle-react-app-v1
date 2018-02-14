const paths = require('./paths')

module.exports = function (proxy, allowedHost) {
  return {
    contentBase: paths.appPublic,
    publicPath: '/',
    https: process.env.HTTPS === 'true',
    // https: {
    //   key: fs.readFileSync("/path/to/server.key"),
    //   cert: fs.readFileSync("/path/to/server.crt"),
    //   ca: fs.readFileSync("/path/to/ca.pem"),
    // }
    port: 3000,
    host: process.env.HOST || '0.0.0.0',
    public: allowedHost,
    proxy,
    hot: true,
    inline: true,
    disableHostCheck: true,
    compress: true,
    watchContentBase: true,
    quiet: true,
    open: true,
    overlay: false,
    historyApiFallback: true,
    clientLogLevel: 'none',
  }
}
