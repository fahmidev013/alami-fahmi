const config = {
    verbose: true,
    transformIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'node'
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['./src/setupTests.js'],
    testEnvironment: 'jsdom'
  };
  
  module.exports = config;