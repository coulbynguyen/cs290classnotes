var http = require('http');
//need to import http module

var server = http.createServer(function(req, res){
  console.log("== Request made");
  console.log(" -Method:", req.method);
  console.log(" -Path:", req.url);
  console.log(" -headers:", req.headers);

  // res.statusCode = 200;
  // // res.write("HELLO WORLD!");
  // res.setHeader("Content-Type", "text/html");
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Welcome to this site!</h1>");
  res.write("<p>You requested " + req.url + "</p>");
  res.write("</body>");
  res.write("</html>");

  res.end();
});

server.listen(8000, function(){
  console.log("== Server listening on port 8000");
});
// all communication happens on port 80
// package.json javascript ovject notation
//npm init
// install the correct dependencies
//npm install
//--save semver or some shit
//package.json you can specify scripts
