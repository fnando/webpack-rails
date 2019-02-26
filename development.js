/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const Manifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const shared = require("./shared");
const handlebarsRule = require("./webpack/handlebars_rule");
const cssRule = require("./webpack/css_rule");
const imageRule = require("./webpack/image_rule");

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
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader?configFile=.eslintrc.development"
        ]
      },

      cssRule(),
      imageRule(),
      handlebarsRule()
    ]
  }
});
