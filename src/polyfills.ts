//
import fs from 'fs-extra';
import path from 'path';

export default new Set(
  fs
    .readFileSync(path.join(__dirname, '../data/babel-feature.js'))
    .toString()
    .split('\n')
);
