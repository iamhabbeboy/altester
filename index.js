var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('<h2> Hello, world !</h2>');
}).listen(8080);

//http.listen(2000);
