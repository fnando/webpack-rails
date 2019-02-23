module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["app/frontend/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx"],
  modulePaths: ["<rootDir>/test/stories", "<rootDir>/app/frontend"],
  setupFiles: ["<rootDir>/test/javascript/test_helper.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/test/javascript/**/*_test.js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "https://example.com",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false
};
