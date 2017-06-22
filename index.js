/* eslint-env node */
module.exports = {
  development: require("./webpack/development"),
  test: require("./webpack/test"),
  production: require("./webpack/production")
};
