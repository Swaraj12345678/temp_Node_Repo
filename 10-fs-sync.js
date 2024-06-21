const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs')
// fs.readFileSync
console.log("Start");
const first = readFileSync("./folder/first.txt", "utf8");
const second = readFileSync("./folder/second.txt", "utf8");

console.log(`${first} \n${second}`);

// use of writeFileSync
writeFileSync(
  "./folder/result-sync.txt",
  `here is the result: ${first} , ${second}`
);

writeFileSync("./folder/result-sync.txt", `\n you got this !!!!`, {
  flag: "a",
}); // previously written will be erased if flag a is not mentioned!

console.log("done with this task!");
console.log("starting a new one!");

// output ->>
/*Start
this is first.txt
this is second.txt
done with this task!
starting a new one!
*/ 
// same thing is done in async NOTICE the difference!
