//jshint esversion:6

// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");
var supervillains = require("supervillains");
var names = [];
for (var i = 0; i < 10; i++) {
  names.push(supervillains.random());
}
console.log(names);
