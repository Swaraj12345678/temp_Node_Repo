const os = require("os");

// info about currnet user -
const user = os.userInfo();
// console.log(user);

// method returns system uptime ->
console.log(`system's uptime is ${os.uptime}`);

const currnetOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currnetOS);
// name: 'Windows_NT',
//   release: '10.0.22631',
//   totalMem: 17015463936,
//   freemem: 6887583744
