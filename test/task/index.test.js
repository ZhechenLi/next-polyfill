let fs = require('fs');
let path = require('path');
let parseDefinitions = require('../../lib/util/parseDefinitions');

test("Task: The Result of Parse Definitions shouldn't be falsy", () => {
  const outputDir = path.join(__dirname, '../../data/definitions.js');

  expect(fs.readFileSync(outputDir).toString()).not.toBeFalsy();

  expect(require.resolve('../../data/listAllPolyfills.js')).not.toBeFalsy();

  expect(
    Object.keys(require.resolve('../../data/definitions.js')).length
  ).not.toBeFalsy();
});
