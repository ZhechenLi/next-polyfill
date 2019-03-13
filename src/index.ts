import * as babel from '@babel/core';
import fs from 'fs-extra';
import path from 'path';
import polyfills from './polyfills';

import useBuiltInsPlugin from '@babel/preset-env/lib/use-built-ins-plugin';

export { default as getFeatureMap } from './generateFeatureList';

// TODO: 未来支持可选项
type MainParamsOptions = {};

export function parse(
  code: string,
  options?: MainParamsOptions,
  callback?: (error: Error, result: Set<string>) => void
) {
  let cb = callback;

  let result: Set<string>;

  babel.transform(
    code,
    {
      plugins: [
        [
          {
            ...useBuiltInsPlugin(babel),
            post(this: { builtIns: Set<string> }) {
              if (!this.builtIns) {
                throw new Error('BuiltIns hasn\'t successful create');
              }
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

