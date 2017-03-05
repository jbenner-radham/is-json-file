'use strict';

const path = require('path');

module.exports = function (resource) {
    return path.extname(resource) === '.json';
}
