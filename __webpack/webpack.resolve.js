const path = require('path')

module.exports = {
  extensions: ['.js', '.jsx'],
  modules: [
    'app/components/Footer',
    'app/components/Header',
    'app/components/Landing',
    'app/components/Project',
    'app/components/NotFound',
    'app/components/shared',
    'app/components',
    'app/containers',
    'app/public',
    'app/services',
    'app/store',
    'app/styles',
    'app/tests',
    'app/utils',
    'app',
    '.',
    'node_modules'
  ]
}
