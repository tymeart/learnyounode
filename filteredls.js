var fs = require('fs');
var path = require('path');

var pathName = process.argv[2];
var ext = process.argv[3];

fs.readdir(pathName, callback);

function callback(err, list) {
  if (err) {
    throw err;
  }
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === ('.' + ext)) {
      console.log(list[i]);
    }
  }
}
