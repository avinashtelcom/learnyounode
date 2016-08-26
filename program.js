var http = require("http");
var url = require("url");
var strftime = require("strftime");

var server = http.createServer(function(request, response) {
  
  if (request.method != 'GET')  
    return response.end('send me a GET\n');
         
  response.writeHead(200, { 'content-type': 'text/json' });
  
  var url1 = url.parse(request.url, true);
  var iso = url1.query.iso;
  var pathname = url1.pathname;
  var date = new Date(iso);
  if(pathname === '/api/parsetime') {
      
      response.end(JSON.stringify({  
       "hour": date.getHours(),  
       "minute": date.getMinutes(),  
       "second": date.getSeconds()  
     }));
  }
  if(pathname === '/api/unixtime') {
      response.end(JSON.stringify({ "unixtime": date.getTime() }));
  }
  
  
});
server.listen(process.argv[2]);