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
const cssRule = require("./webpack/css_rule");
const imageRule = require("./webpack/image_rule");

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
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader?failOnWarning=true&failOnError=true"
        ]
      },

      cssRule(),
      imageRule(),
      handlebarsRule()
    ]
  }
});
