const path = require("path");

module.exports = () => ({
  test: /\.(hbs|handlebars)$/,
  use: [
    {
      loader: "handlebars-loader",
      options: {
        helperDirs: path.join(process.cwd(), "app/frontend/handlebars/helpers"),
        partialDirs: path.join(process.cwd(), "app/frontend/handlebars/partials")
      }
    }
  ]
});
