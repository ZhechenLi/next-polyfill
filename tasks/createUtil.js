#!/usr/bin/env node

require('./createExport')('./src/util', {
  exclude: ['index1.ts']
}).then(code => {
  require('fs').writeFileSync('./src/util/index.ts', code);
});
