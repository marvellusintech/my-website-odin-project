
const http = require('http');
const fs = require('fs');
const path = require('path');

// A helper function to serve files
const serveFile = (filePath, res, contentType) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 -internal server error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
};

//create server
const server = http.createServer((req, res) => {
  const baseDir = path.join(__dirname); // Project directory

  //   Route Handling
  switch (req.url) {
    case "/":
      serveFile(`${baseDir}/index.html`, res, "text/html");
      break;
    case "/about":
      serveFile(`${baseDir}/about.html`, res, "text/html");
      break;
    case "/contact-me":
      serveFile(`${baseDir}/contact-me.html`, res, "text/html");
      break;
    default:
      serveFile(`${baseDir}/404.html`, res, "text/html");
      break;
  }
});

// start the server
server.listen(5500, () => {
  console.log("Server is running on http://localhost:5500");
});
