const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  
  res.write('<!DOCTYPE html>');
  res.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
  res.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">');
  res.write('<p>Hi there <b>bold</b> one</p>');
  res.write('<div>Whoop</div>');
  res.write('<a class="button">Button</a>');
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
