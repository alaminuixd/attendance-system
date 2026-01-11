import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello world</h1>");
    res.statusCode = 200;
    res.end();
  } else {
    res.write(`<h1>404 Page Not Found!</h1>`);
    res.statusCode = 200;
    res.end();
  }
});

server.listen(5005, () => {
  console.log(`Listening to the PORT 5005`);
});
