var fs = require("fs");
fs.readFile(process.argv[2],function(err, data) {
	if(err) {
		return console.error("Error Ocured while reading the file");
	}
	var str = data.toString();
	var arr = str.split("\n");
	if(arr.length) {
	 console.log(arr.length-1);
	} else {
	 console.log(0);
	}
	
});
