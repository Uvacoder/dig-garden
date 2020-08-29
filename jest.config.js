module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@theme-ui(.*)$': '<rootDir>/node_modules/@theme-ui$1',
    '^@theme(.*)$': '<rootDir>/src/theme',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1'
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `src/components/App/`
  ],
  testMatch: ['**/*.(test).(js|jsx)'],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`
};
