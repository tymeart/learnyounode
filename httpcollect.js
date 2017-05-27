var http = require('http'),
    bl = require('bl');

var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');

  res.pipe(
    bl(function(err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data.toString().length);
      console.log(data.toString());
    })
  );
});
