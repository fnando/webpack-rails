/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const development = require("./development");
const config = merge({}, development);

config.module.rules[0].use[1].options.configFile = ".eslintrc.test";
config.resolve.modules.push(path.resolve(path.join(process.cwd(), "test/stories")));

module.exports = config;
