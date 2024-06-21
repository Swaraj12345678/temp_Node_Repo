// commonJs , every file in node is module (by default)
// Modules ->> Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-altenative-flavors");
require('./7-mind-grenade');

// console.log(names);  // { john: 'John', peter: 'peter' }

// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);

// console.log(data);