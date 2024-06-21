// const http = require("http");
// const server = http.createServer((req, res) => {
//     // console.log(res);   // will return a giant object only after refreshing
//     // res.write("welcome to homepage");
//     // res.end();

//     if (req.url === '/') {
//         res.end("welcome to homepage");
//     }
//     if (req.url === '/about') {
//         res.end("welcome to about page!");
//     }
//     // default -
//     res.end(`
//     <h1>Oops!</h1>   
//     <p>We can't seem to find the page you are looking for</p> 
//     <a href="/">back home</a> 
//     `)
// });

// server.listen(5000);


// corrected version- 
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the homepage");
    } else if (req.url === '/about') {
        res.end("Welcome to the about page!");
    } else {
        res.end(`
            <h1>Oops!</h1>   
            <p>We can't seem to find the page you are looking for</p> 
            <a href="/">Back home</a> 
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
