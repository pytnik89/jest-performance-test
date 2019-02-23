const config = {
  globals: {
    CONFIG: {},
  },
  roots: ['<rootDir>/test'],
  testPathIgnorePatterns: ['<rootDir>/(node_modules)/'],
  testRegex: '.*\.[jt]sx?$',
  testEnvironment: 'node'
};
module.exports = config;
