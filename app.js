//npm global command, comes with node
// npm --version

// local dependency
// npm i <packageName>

// global dependency
// npm install -g <packageName>
// sudo npm install g <packageName. (mac)

// package.json = manifest file (stores important project info)
// manual approach (create package.json in the root, create props etc)
// npm init (step by step)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
