var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var lines = str.split("\n");
var numberOfLines = lines.length -1;
console.log(numberOfLines);