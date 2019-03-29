import * as babel from '@babel/core';
import bomPraserPlugin from './bomPraserPlugin';

import getPolyfills from './util/getPolyfills';

export default async function bomPraser(code: string) {
  let result: Set<string>;

  babel.transformSync(code, {
    plugins: [
      [
        // TODO: 提取成单独的 plugin
        {
          ...bomPraserPlugin(babel),
          post(this: { builtIns: Set<string> }) {
            result = this.builtIns;
          }
        },
        { polyfills: getPolyfills() }
      ]
    ]
  });
  return result;
}
