/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");

const shared = require("./shared");

module.exports = merge(shared, {
  output: {
    path: path.resolve(process.cwd(), "public/dist/"),
    filename: "[name].js",
    publicPath: "/dist/"
  },

  devtool: "eval-source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("test")
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader?configFile=.eslintrc"
        ]
      },

      {
        test: /\.s?css$/,
        use: "null-loader"
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
        use: "null-loader"
      }
    ]
  }
});
