"use strict";

function processData(input) {
  var ss = input.split("\n");
  var T = parseInt(ss[0]);
  for(var i = 0; i < T; i++) {
    console.log(solve(parseInt(ss[1 + i])));
  }
}

function solve(n) {
  var zero = "00000000000000000000000000000000";
  var bin = (zero + n.toString(2)).substr(-32).split("");
  var ret = [];
  for(var i = 0; i < 32; i++) {
    ret.push(1 - bin[i]);
  }
  return parseInt(ret.join(""), 2);
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

