const http = require('http'),
      url = require('url');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end('Must be GET request');
  }
  res.writeHead(200, {'Content-Type': 'application/json'});

  

});

server.listen(Number(process.argv[2]));
