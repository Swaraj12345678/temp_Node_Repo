// call back is done in fs-async wali file!

const fs = require('fs');
console.log("start");
// promise approach ->>>
// readfunction
const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    })
}
// write function
const writeText = (path, first, second) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, `Here is the result ${first}, ${second}`, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

//async await approach!
const start = async () => {
    try {
        const first = await getText('./folder/first.txt');
        const second = await getText('./folder/second.txt');
        writeText('./folder/asyncAwaitResult.txt', first, second);
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }


}

start();
console.log("end");

// promise ka approach ke sath use kiya gaya tha!!!!==============>
// getText('./folder/first.txt')
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));


// // callback approach -
// fs.readFile('./folder/first.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     else {
//         console.log(data);
//     }
// });