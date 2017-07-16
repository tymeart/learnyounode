const http = require('http'),
      bl = require('bl');

var urlsArr = process.argv.slice(2);
var results = [];
// number of URLs that returned entire contents
var count = 0;

function getData(index) {
  var url = urlsArr[index];
  http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
      if (err) console.log(err);
      results[index] = data.toString();
      count++;

      if (count === 3) {
        results.forEach(function(result) {
          console.log(result);
        })
      }
    }));
  });

}

for (let i = 0; i < urlsArr.length; i++) {
  getData(i);
}
