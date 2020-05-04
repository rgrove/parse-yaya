# parse-yaya

A [Yet Another Yet Another Markup Language](https://github.com/beryllium/yaya) parser for Node.js and browsers.

[![npm version](https://badge.fury.io/js/%40rgrove%2Fparse-yaya.svg)](https://badge.fury.io/js/%40rgrove%2Fparse-yaya)
[![Bundle size](https://badgen.net/bundlephobia/minzip/@rgrove/parse-yaya)](https://bundlephobia.com/result?p=@rgrove/parse-yaya)

## Contents

-   [Installation](#installation)
-   [Features](#features)
-   [Usage](#usage)
-   [Why?](#why)
-   [License](#license)

## Installation

```
npm install @rgrove/parse-yaya
```

Or, if you like living dangerously, you can load [the minified UMD bundle][umd]
in a browser via [Unpkg][] and use the `parseYaya` global.

[umd]:https://unpkg.com/@rgrove/parse-yaya/dist/umd/parse-yaya.min.js
[Unpkg]:https://unpkg.com/

## Features

-   Parses Yaya.

-   Has at least [two problems](http://regex.info/blog/2006-09-15/247).

## Usage

```js
const parseYaya = require('@rgrove/parse-yaya');
parseYaya('{"key": "value",/* and now, an array */"key2": ["value1", "value2",]}, // trailing comment');
```

The result is a JS object with the following structure:

```js
{
  key: 'value',
  key2: [ 'value1', 'value2' ]
}
```

## Why?

Why not?

## License

[ISC License](LICENSE)
