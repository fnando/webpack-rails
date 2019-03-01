/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const Manifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const shared = require("./shared");
const handlebarsRule = require("./webpack/handlebars_rule");
const jsRule = require("./webpack/js_rule");
const cssRule = require("./webpack/css_rule");
const filesRule = require("./webpack/files_rule");

module.exports = merge(shared, {
  mode: "development",
  devtool: "eval-source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new Manifest({output: "manifest.json", writeToDisk: true, publicPath: true})
  ],

  module: {
    rules: [
      jsRule({eslint: {configFile: ".eslintrc.development"}}),
      cssRule(),
      filesRule(),
      handlebarsRule()
    ]
  }
});
