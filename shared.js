/* eslint-env node */
const glob = require("glob");
const path = require("path");
const cwd = process.cwd();

function names(file) {
  return [`${path.basename(file, path.extname(file))}.js`, file];
}

function entries(buffer, [key, value]) {
  return Object.assign(buffer, {[key.replace(/\.js$/, "")]: value});
}

function resolveEntries() {
  const entriesPath = process.env.WEBPACK_ENTRIES_PATH || "app/frontend/*.{js,jsx}";

  return glob
    .sync(path.join(cwd, entriesPath))
    .map(file => names(file))
    .reduce(entries, {});
}

module.exports = {
  target: "web",
  entry: resolveEntries(),
  resolve: {
    modules: [
      "node_modules",
      path.resolve(cwd, "app/frontend")
    ],
    extensions: [".js", ".jsx"]
  }
};
