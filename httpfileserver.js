const http = require('http'),
      fs = require('fs');

const server = http.createServer((req, res) => {
  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
