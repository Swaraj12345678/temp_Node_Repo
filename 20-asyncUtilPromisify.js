// async pattern - 1) Node's native option - use of util  2) direct use of require('fs').promises*

// const fs = require('fs');                            // approach 1
// const util = require('util');   // imp
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

//------OR----
const { readFile, writeFile } = require('fs').promises;      // approach 2

//async await approach!
const start = async () => {
    try {
        // const first = await readFilePromise('./folder/first.txt', 'utf8');   // approach 1
        // const second = await readFilePromise('./folder/second.txt', 'utf8');
        // await writeFilePromise('./folder/asyncAwaitResult1.txt', `Here is the asyncAwaitResult1.txt \n ${first} \n ${second}`);

        // OR

        const first = await readFile('./folder/first.txt', 'utf8');     // approach 2
        const second = await readFile('./folder/second.txt', 'utf8');
        await writeFile('./folder/asyncAwaitResult1.txt', `Here is the asyncAwaitResult1.txt \n ${first} \n ${second}`);

        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }


}

start();





// This function converts a callback-based function into a promise-based one.
// It is useful for working with older Node.js APIs that do not natively support promises.
// util example - > 
/* const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function read() {
    try {
        const data = await readFile('./folder/first.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

read();
*/