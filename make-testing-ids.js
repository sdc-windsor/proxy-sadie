const fs = require('fs');

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let i = 0;
let ids = [];

while (i < 100000) {
  let temp1 = getRandomArbitrary(9000000, 10000000);
  let temp2 = getRandomArbitrary(1, 30000);
  ids.push('' + temp1 + ',' + temp2)
  i += 1;
}

const result = ids.join('\n');

fs.writeFile('test_ids.csv', result, (err) => {
  if (err) { console.log(err) }
})