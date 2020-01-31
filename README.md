# TO BE DEFINED
(below is template only)

# Whole repository is template for new Node.js TypeScript module. Download it and adapt to your needs.

- [About](#about)
- [Examples](#examples)
  - [Basic example](#basic-example)
- [Documentation](#documentation)

# About
This module extends Array prototype with additional methods:
- xFindAllSlices()  (x stands for custom, non-standard method)

```sh
$ npm i -S array-find-slice
```


# Examples

## Basic example
```js
import 'array-find-slice';
let arr = ['x', 'A', 'B', 'x', 'x', 'x', 'A', 'B', 'x'];
arr.xFindAllSlices(['A', 'B']); // [['A', 'B'], ['A', 'B']]
arr.xFindAllSlices(['x', 'x']); // [['x', 'x']]
arr.xFindAllSlices(['x']); // [['x'], ['x'], ['x'], ['x'], ['x']]
```

# Documentation

## Array<T>.prototype.xFindAllSlices(matcher: DeepPartial<T>[], opts?: Array.XFindAllSlices_Opts)

### Options
#### `opts.fullMatch: boolean` default `false`
- if `false` (default) then array elements are compared with `matcher` elements using recursive deep partial match [deep-match2](https://www.npmjs.com/package/deep-match2).
- if `true` then array elements are compared with `matcher` elements using [deep-equal](https://www.npmjs.com/package/deep-equal). In case of `fullMatch=true` TypeScript forces matcher to be non-partial `T[]`.