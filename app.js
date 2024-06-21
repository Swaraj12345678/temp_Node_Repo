// npm - global command, comes with node
// npm --version //10.7.0

// local dependencies - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any package
// npm install -g <packageName>

// package.json - manifest file (stores important info about the project/ packages)
// manual approach  (create package.jsonin the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// for example purpose we installed lodash and bootstrap packages
const _ = require('lodash');

// just to experiment -
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);  // [ 1, 2, 3, 4 ]


// package.json file plays crucial role while sharing our code in github
// while sharing on github we don't push node modules as they are very big in size!
// there dependencies can be used if some clones our project !!