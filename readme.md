# to-absolute-path [![Build Status](https://travis-ci.org/mastilver/to-absolute-path.svg?branch=master)](https://travis-ci.org/mastilver/to-absolute-path)[![Coverage Status](https://coveralls.io/repos/mastilver/to-absolute-path/badge.svg?branch=master&service=github)](https://coveralls.io/github/mastilver/to-absolute-path?branch=master)

> Transform any path to an absolute path depending on your call stack


## Install

```
$ npm install --save to-absolute-path
```


## Usage

```js
var toAbsolutePath = require('to-absolute-path');

toAbsolutePath('file.txt');
//=> c:/folder/subfolder/file.txt
```


## API

### toAbsolutePath(paths, [depth])

#### paths

*Required*  
Type: `Array`, `string`

the path(s) to convert in to absolute one
a path can be a negative path (starting with `!`)

#### depth

Type: `int`  
Default: 0

Depth in the function call stack.
ie: from which file/function the input paths are relative to


## License

MIT © [Thomas Sileghem](https://github.com/mastilver)
