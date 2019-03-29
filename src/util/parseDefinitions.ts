#!/usr/bin/env node
import _ from 'lodash';

const ArrayNatureIterators = [
  'Array.prototype.@@iterator'
  // 'es6.object.to-string',
  // babel 在导入某些属性时会把这个 polyfill 也导入,polyfill.io 中没有这个 polyfill
  // 'web.dom.iterable'
];

const CommonIterators = ['String.prototype.@@iterator'].concat(
  ArrayNatureIterators
);

// Parsing polyfill to generate definition used to match specific code
export default function parseDefinitions(polyfills) {
  let nextPolyfillFeature = {
    builtins: {
      Map: CommonIterators,
      Set: CommonIterators,
      WeakMap: CommonIterators,
      WeakSet: CommonIterators
    },
    instanceMethods: {
      entries: ArrayNatureIterators,
      keys: ArrayNatureIterators,
      values: ArrayNatureIterators
    },
    staticMethods: {
      Promise: {
        all: CommonIterators,
        race: CommonIterators
      }
    }
  };

  polyfills.forEach(e => {
    let slice = e.split('.');
    if (slice[0] === 'Intl') {
      // intl later
      return;
    }
    if (slice.length === 1) {
      parseBuiltins(slice, nextPolyfillFeature.builtins);
      return;
    }

    if (slice[1] === 'prototype') {
      parseInstanceMethods(slice, nextPolyfillFeature.instanceMethods);
      return;
    } else {
      parseStaticMethods(slice, nextPolyfillFeature.staticMethods);
    }
  });

  return nextPolyfillFeature;
}

function parseBuiltins(slice, builtins) {
  let [evaluatedPropType] = slice;
  builtins[evaluatedPropType] = slice.join('.');
}

function parseInstanceMethods(slice, instanceMethods) {
  let [evaluatedPropType, _, propName] = slice;

  if (!instanceMethods[propName]) {
    instanceMethods[propName] = [];
  }
  instanceMethods[propName].push(slice.join('.'));
}

function parseStaticMethods(slice, staticMethods) {
  let [evaluatedPropType, propName] = slice;

  if (!staticMethods[evaluatedPropType]) {
    staticMethods[evaluatedPropType] = {};
  }
  staticMethods[evaluatedPropType][propName] = slice.join('.');
}
