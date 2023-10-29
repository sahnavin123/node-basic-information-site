const http = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("home.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
      break;
    case "/about":
      fs.readFile("about.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
      break;
    case "/contact":
      fs.readFile("contact.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
      break;
    default:
      fs.readFile("404.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
      break;
  }
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
