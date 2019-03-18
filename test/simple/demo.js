let fs = require('fs');
let path = require('path');

let parse = require('../../lib').parse;
let featureMap = require('../../lib').getFeatureMap();


const code = `
    Object.entries({a: 1})
`;

parse(code, {}, (err, result) => {
  if (err) throw err;

  console.log(result)

});