#!/usr/bin/env node

var path = require("path");
var fs = require("fs");
var fsext = require("../libraries/fsext.js");



console.log("Fixing permission on binary files...");


var origin = path.join(__dirname, "../");
origin.replace(/\\/g, "/");

var list = fsext.glob( origin, [ "**/bin/*" ] );

for (var i = 0, l = list.length; i < l; i ++) {
	fs.chmodSync(list[i].path, 0777);
}


console.log("Permissions fixed.");
