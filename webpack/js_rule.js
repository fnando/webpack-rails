module.exports = ({ eslint }) => ({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [
    "babel-loader",
    {
      loader: "eslint-loader",
      options: eslint
    }
  ]
});
