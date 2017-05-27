const http = require('http'),
      bl = require('bl');

var urlsArr = process.argv.slice(2);

for (let i = 0; i < urlsArr.length; i++) {
  var url = urlsArr[i];
  http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
      if (err) console.log(err);
      console.log(data.toString());
    }));
  });
}
