//
import fs from 'fs-extra';

export default new Set(fs.readFileSync('./data/babel-feature.js').toString().split('\n'));
