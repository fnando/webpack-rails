const path = require("path");

module.exports = () => ({
  loader: "sass-loader",
  options: {
    sourceMap: true,
    includePaths: [
      path.join(process.cwd(), "app/frontend")
    ]
  }
});
