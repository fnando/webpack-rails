module.exports = () => ({
  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
  use: "file-loader?name=[name]-[hash:20].[ext]"
});
