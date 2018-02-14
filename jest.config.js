module.exports = {
  bail: true,
  verbose: true,
  setupFiles: ['<rootDir>/app/test/Setup/rafPolyfill.js', '<rootDir>/app/test/Setup/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/app/'],
  collectCoverageFrom: [
    '**/app/components/**/*.js',
    '**/app/containers/**/*.js',
    '**/app/store/**/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
}
