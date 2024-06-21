// GLOBALS - No window!!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about the current module (file)
// process - info about env where the program is being executed

console.log(__dirname); // C:\NodeTut
console.log(__filename); //C:\NodeTut\app.js

setInterval(() => {
  console.log("Hello World");
}, 1000);
