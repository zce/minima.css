# minima.css

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A personal minimalist CSS framework for myself, inspired by [Mifa](https://github.com/phodal/mifa) based on [Milligram](https://github.com/milligram/milligram).

## Installation

```shell
$ yarn add minima.css

# or npm
$ npm install minima.css
```

### What's included

```
minima.css
├── dist
│   ├── minima.css
│   ├── minima.css.map
│   ├── minima.min.css
│   └── minima.min.css.map
├── scss
│   ├── _base.scss
│   ├── _blockquote.scss
│   ├── _button.scss
│   ├── _code.scss
│   ├── _color.scss
│   ├── _divider.scss
│   ├── _form.scss
│   ├── _grid.scss
│   ├── _image.scss
│   ├── _link.scss
│   ├── _list.scss
│   ├── _spacing.scss
│   ├── _table.scss
│   ├── _typography.scss
│   ├── _utility.scss
│   └── main.scss
├── CHANGELOG.md
├── LICENSE
├── README.md
└── package.json
```

## Usage

First, use any method mentioned above to download minima.css. Then, just add these tags in the head. minima.css is also available via CDN.

```html
<!-- google fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
<!-- normalize -->
<link rel="stylesheet" href="https://unpkg.com/normalize.css/normalize.css">
<!-- minima.css -->
<link rel="stylesheet" href="https://unpkg.com/minima.css">
```

### Via Scss Importing

```scss
// Custom.scss
// Option A: Include all of minima.css

@import 'node_modules/minima.css/scss/minima';
```

```scss
// Custom.scss
// Option B: Include parts of minima.css

// Required
@import 'node_modules/minima.css/scss/color';

// Optional
@import 'node_modules/minima.css/scss/base';
@import 'node_modules/minima.css/scss/blockquote';
@import 'node_modules/minima.css/scss/button';
@import 'node_modules/minima.css/scss/code';
@import 'node_modules/minima.css/scss/divider';
@import 'node_modules/minima.css/scss/form';
@import 'node_modules/minima.css/scss/grid';
@import 'node_modules/minima.css/scss/link';
@import 'node_modules/minima.css/scss/list';
@import 'node_modules/minima.css/scss/spacing';
@import 'node_modules/minima.css/scss/table';
@import 'node_modules/minima.css/scss/typography';
@import 'node_modules/minima.css/scss/image';
@import 'node_modules/minima.css/scss/utility';
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-image]: https://img.shields.io/travis/zce/minima.css.svg
[travis-url]: https://travis-ci.org/zce/minima.css
[downloads-image]: https://img.shields.io/npm/dm/minima.css.svg
[downloads-url]: https://npmjs.org/package/minima.css
[version-image]: https://img.shields.io/npm/v/minima.css.svg
[version-url]: https://npmjs.org/package/minima.css
[license-image]: https://img.shields.io/github/license/zce/minima.css.svg
[license-url]: https://github.com/zce/minima.css/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/minima.css.svg
[dependency-url]: https://david-dm.org/zce/minima.css
[devdependency-image]: https://img.shields.io/david/dev/zce/minima.css.svg
[devdependency-url]: https://david-dm.org/zce/minima.css?type=dev
[style-image]: https://img.shields.io/badge/code_style-CSScomb-brightgreen.svg
[style-url]: https://github.com/csscomb/csscomb.js
