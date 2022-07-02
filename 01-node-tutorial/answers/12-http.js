const http = require("http");
const fs = require('fs').promises
let first;
const server = http.createServer(async (req, res) => {
  first = await fs.readFile('./content/first.txt', 'utf8')
  if (req.url === "/") {
    res.end(`Welcome to our home page ${first}`);
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000);
