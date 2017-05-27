var http = require('http'),
    bl = require('bl');

var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');

  var allTheData = '';
  res.on('data', function(chunk) {
    allTheData += chunk;
  });

  res.on('end', function() {
    try {
      console.log(allTheData.length);
      console.log(allTheData);
    } catch (error) {
      console.log(error.message);
    }
  })
});
