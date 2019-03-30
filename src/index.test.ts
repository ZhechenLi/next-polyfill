import { parse } from './index';
import '@babel/polyfill';
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

console.timeEnd()
`;

test('Simple feature: array.prototype.copyWithin', async done => {
  let result = await parse(code);

  expect([...result]).toEqual(
    expect.arrayContaining(['Array.prototype.copyWithin'])
  );
  done();
});

test('Constructor: new Map()', async done => {
  let result = await parse(code);

  expect([...result]).toEqual(expect.arrayContaining(['Map']));
  done();
});

test('Static feature: Object.entries', async done => {
  let result = await parse(code);

  expect([...result]).toEqual(expect.arrayContaining(['Object.entries']));
  done();
});

test('Feature with all UpperCase: new Date().toISOString()', async done => {
  let result = await parse(code);

  expect([...result]).toEqual(
    expect.arrayContaining(['Date.prototype.toISOString'])
  );
  done();
});

test('BOM Feature: console.timeEnd()', async done => {
  let result = await parse(code);

  expect([...result]).toEqual(expect.arrayContaining(['console.timeEnd']));
  done();
});

// test('Feature with Some specific case must contain iterator: Map', async done => {
// let result = await parse(code);

// expect([...result]).toEqual(
//   expect.arrayContaining(['Array.prototype.@@iterator', 'String.prototype.@@iterator'])
// );
// done();
// });
