// khai bao library
const { createServer } = require('node:http');

if (process.env.NODE_ENV === 'development') {
  console.log("hello")
}

// khai bao cac tham so can su dung de chay
const hostname = '127.0.0.1';
const port = 3000;

// su dung library class
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});