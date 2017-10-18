# webpack-rails

Use webpack with Ruby on Rails without having to configure it.

## Usage

Make sure your Rails app has an `package.json` file in place.

Then go ahead and install `webpack-rails`.

```
yarn add -D webpack-rails
```

This is what a sample file looks like:

```json
{
  "name": "myapp",
  "private": true,
  "scripts": {
    "js:watch": "webpack --watch --config ./config/webpack/development.js",
    "js:dist": "webpack --config ./config/webpack/production.js",
    "js:test": "karma start --single-run",
    "js:test:watch": "karma start",
    "heroku-postbuild": "yarn run js:dist"
  },
  "devDependencies": {
    "webpack-rails": "*"
  }
}
```

Create your webpack configuration files under `config/webpack/`. You'll probably have 3 files, one for each environment.

```js
// config/webpack/development.js
module.exports = require("webpack-rails/development");

// config/webpack/production.js
module.exports = require("webpack-rails/production");

// config/webpack/test.js
module.exports = require("webpack-rails/test");
```

In development, use `yarn run js:watch`. To export files for production, use `yarn run js:dist`.

## License

The MIT License (MIT)

Copyright (c) 2017 Nando Vieira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

