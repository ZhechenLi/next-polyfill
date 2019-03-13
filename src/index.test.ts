import { parse } from './index';
import fs from 'fs';
import path from 'path';


const code = `
let a = [1,2,3]

a.copyWithin(1,2,3)

Array.from(document.body.children);

[1,2,3].map()

Object.keys({a:1})

// [1,23].keys()

[1,23].includes()

var debug = {hello: "world"};
var blob = new Blob([JSON.stringify(debug, null, 2)],
  {type : 'application/json'});
`;



test('the data is peanut butter', done => {
    parse(code, {}, callback);

    function callback(err, result) {
        console.log([...result]);

        expect([...result]).toEqual(expect.arrayContaining(["es6.array.copy-within", "es6.array.from", "es6.string.iterator", "es6.array.map", "es6.string.includes", "es7.array.includes", "es6.object.keys", "es6.array.iterator", "web.dom.iterable"]));
        done();
    }


});