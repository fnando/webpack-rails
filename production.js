/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const Manifest = require("webpack-assets-manifest");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Clean = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");

const shared = require("./shared");

module.exports = merge(shared, {
  output: {
    path: path.resolve(process.cwd(), "public/dist/"),
    filename: "[name]-[hash].js",
    publicPath: "/dist/"
  },

  devtool: "source-map",
  bail: true,

  plugins: [
    new Clean(["public/dist"], {root: process.cwd()}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({output: {comments: false}}),
    new ExtractTextPlugin({
      filename: "[name]-[hash].css",
      disable: false,
      allChunks: true
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

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                plugins: () => [autoprefixer({browsers: ["last 2 versions"]})]
              }
            },
            "resolve-url-loader",
            "sass-loader?outputStyle=compressed"
          ]
        })
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use: "file-loader?name=[name]-[hash:20].[ext]"
      }
    ]
  }
});
