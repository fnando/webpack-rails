/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const Manifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Clean = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const shared = require("./shared");

module.exports = merge(shared, {
  output: {
    path: path.resolve(process.cwd(), "public/dist/"),
    filename: "[name]-[hash].js",
    publicPath: "/dist/"
  },

  devtool: "source-map",
  mode: "development",
  bail: true,

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

      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
        use: "file-loader?name=[name]-[hash:20].[ext]"
      }
    ]
  }
});
