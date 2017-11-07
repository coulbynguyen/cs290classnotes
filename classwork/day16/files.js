var fs = require('fs');

fs.readFile('hello.js', 'utf8', function(err, data){
  console.log(data);
});
