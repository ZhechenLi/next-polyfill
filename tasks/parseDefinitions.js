#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let parseDefinitions = require('../lib/util/parseDefinitions').default;
let polyfills = require('../lib/util/getPolyfills').default();

const outputDir = path.join(__dirname, '../data/definitions.js');

fs.writeFileSync(
  outputDir,
  `module.exports = ${JSON.stringify(parseDefinitions(polyfills), null, 4)};`
);
