
// creating big file ->>
// const fs = require("fs");
// for (let i = 0; i < 10000; i++) {
//     fs.writeFileSync('./folder/big.txt', `hello world ${i} \n`, { flag: 'a' });
// }

const { createReadStream } = require('fs');

const stream = createReadStream("./folder/big.txt", { highWaterMark: 90000, encoding: 'utf8' });

// default buffer size = 64kb
// lat buffer = reamainder
// highWaterMark = control size
// const stream = createReadStream("./folder/big.txt", {highWaterMark : 90000}); // buffer size is changed!!
// const stream = createReadStream("./folder/big.txt", {encoding : 'utf8'});

stream.on('data', (result) => {             // event 'data'
    console.log(result);
});
// hello world 0
// hello world 1
// hello world 2
// hello world 3 ..............
// ...... hello world 9996
// hello world 9997
// hello world 9998
// hello world 9999


stream.on('error', (err) => {             // event 'error'
    console.log(err);
});
/*
[Error: ENOENT: no such file or directory, open 'C:\NodeTut\folder\bg.txt'] {
    errno: -4058,
        code: 'ENOENT',
            syscall: 'open',
                path: 'C:\\NodeTut\\folder\\bg.txt'
}
*/