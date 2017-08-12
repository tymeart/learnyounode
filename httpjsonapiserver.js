const http = require('http'),
      url = require('url');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const parsedUrl = url.parse(req.url, true);
  const iso = parsedUrl.query.iso;

  if (req.method !== 'GET') {
    return res.end('Must be GET request');
  }

  if (parsedUrl.pathname === '/api/parsetime') {
    const date = new Date(iso);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    res.end(JSON.stringify({
      hour,
      minute,
      second
    }));
  }

  if (parsedUrl.pathname === '/api/unixtime') {
    const unixtime = new Date(iso).getTime();
    res.end(JSON.stringify({unixtime}));
  }
});

server.listen(Number(process.argv[2]));
