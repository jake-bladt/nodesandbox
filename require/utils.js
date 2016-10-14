var fs = require('fs');

exports.listFiles = function() {
  var files = fs.readdirSync('.');
  return files.map(f => return {fileName: f});
};
