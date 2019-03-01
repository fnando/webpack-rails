/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const Manifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Clean = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const shared = require("./shared");
const handlebarsRule = require("./webpack/handlebars_rule");
const jsRule = require("./webpack/js_rule");
const cssRule = require("./webpack/css_rule");
const filesRule = require("./webpack/files_rule");

module.exports = merge(shared, {
  devtool: "source-map",
  bail: true,
  mode: "production",

  plugins: [
    new Clean(["public/dist"], {root: process.cwd()}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new UglifyJSPlugin({sourceMap: true}),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new Manifest({output: "manifest.json", writeToDisk: true, publicPath: true})
  ],

  module: {
    rules: [
      jsRule({
        eslint: {
          configFile: ".eslintrc",
          failOnWarning: true,
          failOnError: true
        }
      }),

      cssRule(),
      filesRule(),
      handlebarsRule()
    ]
  }
});
