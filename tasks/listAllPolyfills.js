#!/usr/bin/env node
const fs = require('fs-extra');

let createAllPolyfillsData = require('../lib/util/createAllPolyfillsData')
  .default;

createAllPolyfillsData();
