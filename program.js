var http = require("http");
var content = [];
var count = 0;

http.get(process.argv[2], function(response) {
	var body = "";
	response.on("data", function(data) {
		body += data;
	});
	response.on("end", function() {
		content[0] = body;
		count++;
	});
});

http.get(process.argv[3], function(response) {
	var body = "";
	response.on("data", function(data) {
		body += data;
	});
	response.on("end", function() {
		content[1] = body;
		count++;
	});
});

http.get(process.argv[4], function(response) {
	var body = "";
	response.on("data", function(data) {
		body += data;
	});
	response.on("end", function() {
		content[2] = body;
		count++;
	});
});

var refreshIntervalId = setInterval(function() {
	if(count === 3) {
		clearInterval(refreshIntervalId);
		console.log(content.join("\n"));
	}
}, 100);