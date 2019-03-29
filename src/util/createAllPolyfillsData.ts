#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import polyfillLibrary from 'polyfill-library';

export default async function createAllPolyfillsData(
  outputPath = path.join(__dirname, '../../data/')
) {
  let res = await polyfillLibrary.listAllPolyfills();
  return await Promise.all([
    fs.outputFile(
      path.join(outputPath, 'listAllPolyfills.plain.js'),
      `${res.join('\n')}`
    ),
    fs.outputFile(
      path.join(outputPath, 'listAllPolyfills.js'),
      `export default new Set([\n\t"${res.join('",\n\t"')}"]);`
    )
  ]);
}
