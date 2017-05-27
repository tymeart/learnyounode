var myModule = require('./mymodule');
var fs = require('fs');

var directory = process.argv[2];
var ext = process.argv[3];

function callback(err, list) {
  if (err) {
    console.log(`Error: ${err}`);
  }
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

myModule(directory, ext, callback);
