module.exports = {
  preset: 'react-native',
  setupFiles: ['./src/setupJest.js'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/src/transformJest.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation)',
  ],
  testRegex: '/__tests__/.+\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['**/*.tsx', '**/*.ts'],
};
