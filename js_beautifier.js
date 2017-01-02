var beautifier = require("js-beautify");
var fs = require("fs");

var path = process.argv[2];
var data = fs.readFileSync(path, 'utf-8');
var options = {
    indent_size: 2
};
res = beautifier(data, options);

console.log(res);
