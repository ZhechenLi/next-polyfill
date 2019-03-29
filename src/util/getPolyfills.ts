import fs from 'fs-extra';
import path from 'path';

// TODO: filter
export default function getPolyfills(): Set<string> {
  let polyfills = new Set(
    fs
      .readFileSync(
        path.join(__dirname, '../../data/listAllPolyfills.plain.js')
      )
      .toString()
      .split('\n')
      .map(e => e.trim())
  );

  return polyfills;
}
