# webpack-rails

Use webpack with Ruby on Rails without having to configure it.

Features:

* Babel
* React
* Jest
* Storybook + Storyshots
* ESLint
* Sass

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
    "heroku-postbuild": "yarn run js:dist",
    "js:dist": "yarn run webpack-rails-js-dist",
    "js:lint": "yarn run webpack-rails-js-lint",
    "js:storybook": "yarn run webpack-rails-js-storybook",
    "js:test": "yarn run webpack-rails-js-test",
    "js:test:watch": "yarn run webpack-rails-js-test --watch",
    "js:watch": "yarn run webpack-rails-js-watch"
  },
  "devDependencies": {
    "webpack-rails": "*"
  }
}
```

After installing `webpack-rails`, you need to run `webpack-rails-install`, which will copy all the configuration necessary to make this set up work.

```console
$ webpack-rails-install
=> webpack-rails install process
=> copying .storybook... OK
=> copying test/stories... OK
=> copying webpack config... OK
=> copying babel config... OK
=> copying jest files... OK
=> done!
```

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

