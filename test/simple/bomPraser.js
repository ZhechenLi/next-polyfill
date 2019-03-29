let bomPraser = require('../../lib/bomPraser.js').default;
(async () => {
  let result = await bomPraser(`
[1,2,3].includes(1)
console.time();


Number.MAX_SAFE_INTEGER

console.timeEnd();
`);

  console.log(result);
})();

(async () => {
  let result = await bomPraser(`
  let a = [1,2,3]

  a.copyWithin(1,2,3)
  
  Array.from(document.body.children);
  
  [1,2,3].map()
  
  Object.entries({a:1})
  
  [1,23].includes()
  
  var blob = new Blob([JSON.stringify(debug, null, 2)],
    {type : 'application/json'});
    
  new Date().toISOString()
  
  new Map()
`);

  console.log(result);
})();
