const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event', req.url);
    res.end("Hello World");
});

server.listen(5000, () => {
    console.log('Server listening on port: 5000....');
});

// output -
// Server listening on port: 5000....
// request event /
// request event /favicon.ico

/*When you reload localhost:5000 in your browser, the terminal prints request event multiple times because your browser is making multiple requests to the server. Typically, a browser will make at least two requests when you visit a URL:

The Main Page Request: This is the request for the actual HTML page located at localhost:5000.
The Favicon Request: Browsers usually also request the favicon, which is the small icon that appears in the browser tab. This request is typically made to localhost:5000/favicon.ico.*/