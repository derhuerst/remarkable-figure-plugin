# remarkable-figure-plugin

**A remarkable to render images as `<figure>` elements.**

[![npm version](https://img.shields.io/npm/v/remarkable-figure-plugin.svg)](https://www.npmjs.com/package/remarkable-figure-plugin)
[![build status](https://img.shields.io/travis/derhuerst/remarkable-figure-plugin.svg)](https://travis-ci.org/derhuerst/remarkable-figure-plugin)
[![dependency status](https://img.shields.io/david/derhuerst/remarkable-figure-plugin.svg)](https://david-dm.org/derhuerst/remarkable-figure-plugin)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/remarkable-figure-plugin.svg)](https://david-dm.org/derhuerst/remarkable-figure-plugin#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/remarkable-figure-plugin.svg)


## Installing

```
npm install remarkable-figure-plugin
```


## Usage

```js
const figure = require('remarkable-figure-plugin')

const md = new Remarkable()
md.use(figure)

md.render('![alt](url "title")')
```

```html
<p><figure><img src="url" alt="alt" title="title"><figcaption>title</figcaption></figure></p>
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/remarkable-figure-plugin/issues).
