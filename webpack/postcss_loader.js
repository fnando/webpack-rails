const autoprefixer = require("autoprefixer");

module.exports = () => ({
  loader: "postcss-loader",
  options: {
    sourceMap: true,
    plugins: () => [
      autoprefixer({browsers: ["last 2 versions"]})
    ]
  }
})
