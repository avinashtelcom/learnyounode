var fs = require("fs");
var str = fs.readFileSync(process.argv[2]).toString();
var arr = str.split("\n");
if(arr.length) {
 console.log(arr.length-1);
} else {
 console.log(0);
}