var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
   var filename = process.argv[3];
   var readStream = fs.createReadStream(filename);
   
   response.writeHead(200, { 'content-type': 'text/plain' });
   readStream.on('open', function() {
      readStream.pipe(response); 
   });
   
});
server.listen(process.argv[2]);