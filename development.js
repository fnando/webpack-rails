/* eslint-env node */
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const Manifest = require("webpack-assets-manifest");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new ExtractTextPlugin({
      filename: "[name].css",
      disable: false,
      allChunks: true
    }),
    new Manifest({output: "manifest.json", writeToDisk: true, publicPath: true})
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader?configFile=.eslintrc.development"
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
            "sass-loader?outputStyle=compressed&sourceMap=true"
          ]
        })
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use: "file-loader?name=[name].[ext]"
      }
    ]
  }
});
