// async patterns ->
// alternatives for callback which we discussed in fs-async.js

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the homepage");
    }
    else if (req.url === '/about') {
        // BLOCKING CODE
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 10; j++) {
                console.log(`Blocking Code!`);
            }
        }
        res.end("Welcome to the about page!");
    }
    else {
        res.end(`
            <h1>Oops!!</h1>
            <p> We can't seem to find the page you are looking for </p>
            <a href="/">Back home</a>            
        `)
    }
});

server.listen(5000, () => {
    console.log("Server is listening on Port 5000....");
});