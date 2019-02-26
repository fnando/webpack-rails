/* eslint-env node */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = () => ({
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
        plugins: () => [
          autoprefixer({browsers: ["last 2 versions"]})
        ]
      }
    },
    "resolve-url-loader",
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
        includePaths: [
          path.join(process.cwd(), "app/frontend")
        ]
      }
    }
  ]
});
