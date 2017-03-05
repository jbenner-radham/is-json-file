'use strict';

const expect     = require('chai').expect;
const isJsonFile = require('../lib');

describe('is-json-file', () => {
    it('is a function', () => {
        expect(isJsonFile).to.be.a('function');
    });
});
