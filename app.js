var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./folder/big1.txt', 'utf8')
        // res.end(text)

        // use of readStream (better than above approach!!)->> data is sent in chunks
        const fileStream = fs.createReadStream('./folder/big1.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe(res);
        });
        fileStream.on('error', (err) => {
            res.end(err);
        });
    })
    .listen(5000)



// now if we open localhost:5000 go in n/w section of developer tools we'll see that localhost sent a request for bigfile which is of big size !!! 1.9mb to avoid this we use stream!!

// now with the use of readStream if we check the localhost:5000 and in n/w section if we click on localhost we'll see that **Transfer-Encoding: chunked** that is coz of stream!
