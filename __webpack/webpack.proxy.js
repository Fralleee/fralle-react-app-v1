module.exports = function (protocol, address, port) {
  return {
    '/api': {
      target: {
        host: address,
        protocol,
        port,
        ignorePath: true,
        changeOrigin: true,
        secure: false,
      },
    },
  }
}
