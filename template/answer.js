"use strict";

function processData(input) {
  var ss = input.split("\n");
}

function solve() {
  console.log("...");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});

