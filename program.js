var net = require("net");
var strftime = require("strftime");
var data = new Date();
data = strftime("%Y-%m-%d %H:%M", data);

var server = net.createServer(function(socket) {
    socket.end(data+"\n");
});
server.listen(process.argv[2]);