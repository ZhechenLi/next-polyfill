import * as babel from '@babel/core';
import fs from 'fs-extra';
import path from 'path';
import polyfills from './polyfills';

import useBuiltInsPlugin from '@babel/preset-env/lib/use-built-ins-plugin';

export { default as getFeatureMap } from './util/generateFeatureMap';
export {
  default as NextPolyfillWebpackPlugin
} from './NextPolyfillWebpackPlugin';
export { default as aloha } from './aloha';

// TODO: 未来支持可选项
type MainParamsOptions = {};

export { default as parse } from './bomPraser';

// @deprecated
export function parseJS(
  code: string,
  options?: MainParamsOptions,
  callback?: (error: Error, result: Set<string>) => void
) {
  console.warn(
    `the current version parse only parse JS feature has been deprecated, use parse instead it`
  );
  let cb = callback;

  let result: Set<string>;

  babel.transform(
    code,
    {
      plugins: [
        [
          // TODO: 提取成单独的 plugin
          {
            ...useBuiltInsPlugin(babel),
            post(this: { builtIns: Set<string> }) {
              result = this.builtIns;
            }
          },
          { polyfills }
        ]
      ]
    },
    err => {
      if (err) return cb(err, null);
      cb(null, result);
    }
  );
}
