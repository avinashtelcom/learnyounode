module.exports = function(dirname, extension, callback) {

    var fs = require("fs");
    var path = require("path");
   
    fs.readdir(dirname, function(err, list){
    		if(err) return callback(err);
        	list = list.filter(function (file) {  
               return path.extname(file) === '.' + extension;
             }) ;
    		callback(null, list);
    });
};