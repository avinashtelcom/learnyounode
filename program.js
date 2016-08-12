var fs = require("fs");
var path = require("path");

var folder = process.argv[2];
var ext = "."+process.argv[3];

fs.readdir(folder, function(err, files) {
	if(err) return console.error(err);
	
	var realArr = files.filter(function(val) {
		return path.extname(val) === ext;
	});

	for (var i = 0; i < realArr.length; i++) {
		console.log(realArr[i]);
	}
});

