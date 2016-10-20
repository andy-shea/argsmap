# argsmap

[![Build Status](https://travis-ci.org/andy-shea/argsmap.svg?branch=master)](https://travis-ci.org/andy-shea/argsmap)
[![Code Coverage](http://codecov.io/github/andy-shea/argsmap/coverage.svg?branch=master)](http://codecov.io/github/andy-shea/argsmap?branch=master)

A small helper to map function arguments to their parameter names

## Install

```npm install argsmap --save```

## Example

```
import argsMap from 'argsmap';

function basic(foo, bar) {
  const map = argsMap(basic, arguments);
  console.log(map);
  // {
  //   foo: 'hello',
  //   bar: 'world'
  // }
}
basic('hello', 'world');
```

## Limitations

There is no support for default parameters. This library uses simple, naive regex parsing
to extract parameter information which will break when provided with defaults.
An implementation using [Acorn](https://github.com/ternjs/acorn) to tokenize the
function before parameter extraction would provide a more robust implementation at the
expense of performance.

## Licence

[MIT](./LICENSE)
