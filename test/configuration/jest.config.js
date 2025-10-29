module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/configuration/setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/js'],
    testMatch: ['**/test/**/*.test.js', '**/test/**/*.spec.js'],
    verbose: true
};