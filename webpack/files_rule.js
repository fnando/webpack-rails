module.exports = () => ({
  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico|webm|mp4)$/,
  use: "file-loader?name=[name]-[hash:20].[ext]"
});
