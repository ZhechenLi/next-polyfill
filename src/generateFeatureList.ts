/**
 * Generate a map from babel feature to ployfill.io feature key word;
 * TODO: still lost some feature
 */
let fs = require('fs-extra');
let path = require('path');

let debug = true; // TODO

function CaseKebab2Camel(text = '') {
  let meats = text.split('-');
  if (meats.length < 2) {
    return text;
  }
  return meats.map((e, i) => (i === 0 ? e : UpperCaseFirst(e))).join('');
}

function UpperCaseFirst(text) {
  return text.replace(/^\w/, match => match.toUpperCase());
}

let featureMap = new Map();

let babelFeatureList = new Set(
  fs
    .readFileSync(path.join(__dirname, '../data/babel-feature.js'))
    .toString()
    .split('\n')
);
let polyfillFeatureList = new Set(
  fs
    .readFileSync(path.join(__dirname, '../data/polyfill-feature.js'))
    .toString()
    .split('\n')
);

babelFeatureList.forEach(babelFeature => {
  let keys = (babelFeature as string).split('.');

  let type = CaseKebab2Camel(keys[1]);

  let feature = CaseKebab2Camel(keys[2]) || '';

  if (feature === 'iterator') {
    feature = `@@${feature}`;
  }

  let polyfillFeature = feature
    ? `${UpperCaseFirst(type)}.prototype.${feature}`
    : `${UpperCaseFirst(type)}`;

  let isPolyfillSupportFeature = polyfillFeatureList.has(polyfillFeature);

  // babel feature 没有区分 static 方法
  let isPolyfillSupportStaticFeature = polyfillFeatureList.has(
    `${UpperCaseFirst(type)}.${feature}`
  );

  if (isPolyfillSupportStaticFeature)
    polyfillFeature = `${UpperCaseFirst(type)}.${feature}`;

  if (!isPolyfillSupportFeature && !isPolyfillSupportStaticFeature) {
    if (debug) {
      featureMap.set(babelFeature, '');
    }
    return;
  }

  featureMap.set(babelFeature, polyfillFeature);
});

if (debug) {
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
