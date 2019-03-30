/**
 * Generate a map from babel feature to ployfill.io feature key word;
 * TODO: still lost some feature
 */
let fs = require('fs-extra');
let path = require('path');
import s from 'underscore.string';

let debug = true; // TODO

let featureMap = new Map();

let babelFeatureList = new Set(
  fs
    .readFileSync(path.join(__dirname, '../../data/babel-feature.js'))
    .toString()
    .split('\n')
);

let polyfillFeatureList = new Set(
  fs
    .readFileSync(path.join(__dirname, '../../data/listAllPolyfills.plain.js'))
    .toString()
    .split('\n')
);

// es6.array.copy-within => [Array.copyWithin, Array.prototype.copyWithin]
// es6.map => [Map]
function getAllPossiableFeature(babelFeature) {
  let keys = (babelFeature as string).split('.');
  let type = s.camelize(keys[1]);
  let feature = keys[2];

  let possiableFeatureList = [];

  if (feature === 'iterator') {
    feature = '@@iterator';
  }

  if (feature === 'to-iso-string') {
    feature = 'toISOString';
  }

  // constructor
  possiableFeatureList.push(`${s.capitalize(type)}`);
  // static
  possiableFeatureList.push(`${s.capitalize(type)}.${s.camelize(feature)}`);
  // prototype
  possiableFeatureList.push(
    `${s.capitalize(type)}.prototype.${s.camelize(feature)}`
  );

  return possiableFeatureList;
}

function transformFeature(babelFeature, map) {
  return getAllPossiableFeature(babelFeature)
    .map(e => map.has(e) && e)
    .filter(e => e)
    .pop();
}

babelFeatureList.forEach(babelFeature => {
  featureMap.set(
    babelFeature,
    transformFeature(babelFeature, polyfillFeatureList)
  );
});

if (debug) {
  // check babel unsupport feature
  // babelFeatureList.forEach(e => {
  //   if (!featureMap.get(e)) {
  //     console.log(`unsupport babel feature: ${e}`);
  //   }
  // });

  fs.outputFileSync(
    './.temp/featureMap.js',
    JSON.stringify(
      [...featureMap].reduce((acc, cur) => ({ ...acc, [cur[0]]: cur[1] }), {}),
      null,
      4
    )
  );
}

export default function getFeatureMap() {
  return featureMap;
}
