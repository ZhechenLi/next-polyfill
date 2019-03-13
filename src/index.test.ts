import { parse } from './index';
import fs from 'fs';
import path from 'path';

let code = `
let a = [1,2,3]

a.copyWithin(1,2,3)

Array.from(document.body.children);

[1,2,3].map()

Object.entries({a:1})

[1,23].includes()

var blob = new Blob([JSON.stringify(debug, null, 2)],
  {type : 'application/json'});
  
new Date().toISOString()

new Map()
`;

test('Simple feature: array.prototype.copyWithin', done => {
  parse(code, {}, callback);

  function callback(err, result) {
    expect([...result]).toEqual(
      expect.arrayContaining(['es6.array.copy-within'])
    );
    done();
  }
});

test('Constructor: new Map()', done => {
  parse(code, {}, callback);

  function callback(err, result) {
    expect([...result]).toEqual(expect.arrayContaining(['es7.object.entries']));
    done();
  }
});

test('Static feature: Object.entries', done => {
  parse(code, {}, callback);

  function callback(err, result) {
    expect([...result]).toEqual(expect.arrayContaining(['es6.map']));
    done();
  }
});

test('Feature with all UpperCase: new Date().toISOString()', done => {
  //   expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 2]));
  parse(code, {}, callback);

  function callback(err, result) {
    //   console.log([...result]);

    expect([...result]).toEqual(
      expect.arrayContaining(['es6.date.to-iso-string'])
    );
    done();
  }
});
