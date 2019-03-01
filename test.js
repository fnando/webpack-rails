/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");

const shared = require("./shared");
const jsRule = require("./webpack/js_rule");
const handlebarsRule = require("./webpack/handlebars_rule");

module.exports = merge(shared, {
  mode: "development",
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
      jsRule({
        eslint: {
          configFile: ".eslintrc.test"
        }
      }),

      {
        test: /\.s?css$/,
        use: "null-loader"
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico|webm|mp4)$/,
        use: "null-loader"
      },

      handlebarsRule()
    ]
  }
});
