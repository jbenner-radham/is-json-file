'use strict';

const expect     = require('chai').expect;
const isJsonFile = require('../lib');

describe('is-json-file', () => {
    it('is a function', () => {
        expect(isJsonFile).to.be.a('function');
    });

    it('returns `true` for a JSON file', () => {
        let filename = 'taco-tuesday.json';

        expect(isJsonFile(filename)).to.equal(true);
    });

    it('returns `false` for a txt file', () => {
        let filename = 'laser-giraffe.txt';

        expect(isJsonFile(filename)).to.equal(false);
    });
});
