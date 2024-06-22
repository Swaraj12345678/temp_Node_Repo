const http = require("http");

// method 1 --------->
// const server = http.createServer((req, res) => {             // previously done!!
//     // res.end("welcome");
//     if (req.url === '/') res.end("welcome");
//     else if (req.url === '/about') res.end("welcome to about page");
//     else res.end(`<h1>Oops!!!<!h1>
//     <p> page is missing!</p>`)
// });

// method 2 --------->
// using event emitter api - 
const server = http.createServer();
// emits request event 
// subscribe to it/ listen to it/ respond to it
server.on('request', (req, res) => {                         // this works too ! if we check out nodejs doc we'll know that
    // class net.server extends EventEmitter class !! -> https://nodejs.org/docs/latest/api/net.html#class-netserver 
    if (req.url === '/') res.end("welcome");
    else if (req.url === '/about') res.end("welcome to about page");
    else res.end(`<h1>Oops!!!<!h1>
        <p> page is missing!</p>`)
});


server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});