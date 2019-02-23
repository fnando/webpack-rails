/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const test = require("./test");

const config = merge({}, test);

config.resolve.modules.push(path.resolve(path.join(process.cwd(), "test/stories")));

module.exports = config;
