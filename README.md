is-json-file
============
[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![Build Status][BUILD BADGE]][BUILD PAGE]

Determine if a resource is a JSON file.

Usage
-----
```js
const isJsonFile = require('is-json-file');

let filename = 'taco-tuesday.json';

isJsonFile(filename); // > true

let notJson = 'laser-giraffe.txt';

isJsonFile(notJson); // > false
```

Testing
-------
```sh
$ npm test
```

License
-------
This project is licensed under the terms of the [MIT License (Expat)](https://tldrlegal.com/l/mit). You can view the full license [here](LICENSE).

[BUILD BADGE]: https://img.shields.io/travis/jbenner-radham/is-json-file.svg?style=flat-square
[BUILD PAGE]: https://travis-ci.org/jbenner-radham/is-json-file
[LICENSE BADGE]:  	https://img.shields.io/github/license/jbenner-radham/is-json-file.svg?style=flat-square
[LICENSE PAGE]: https://github.com/jbenner-radham/is-json-file/blob/master/LICENSE
[NPM PAGE]: https://www.npmjs.com/package/is-json-file
[NPM VERSION BADGE]: https://img.shields.io/npm/v/is-json-file.svg?style=flat-square
