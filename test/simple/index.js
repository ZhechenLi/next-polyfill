let fs = require('fs');
let path = require('path');

let JsFeatureParser = require('../../lib').parse;
let featureMap = require('../../lib').getFeatureMap();
const code = fs
  .readFileSync(path.join(__dirname, './sample.js'), {
    encoding: 'utf8'
  })
  .toString();

JsFeatureParser(code, {}, (error, result) => {
  if (error) throw error;
  console.log(result);

  console.log([...result].map(e => featureMap.get(e)));

  debugger;
});
