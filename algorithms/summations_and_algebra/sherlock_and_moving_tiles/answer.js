"use strict";

function processData(input) {
  var ss = input.split("\n");
  var L  = parseInt(ss[0].split(" ")[0]);
  var S1 = parseInt(ss[0].split(" ")[1]);
  var S2 = parseInt(ss[0].split(" ")[2]);
  var Q  = parseInt(ss[1]);
  for(var i = 0; i < Q; i++) {
    var q = parseInt(parseInt(ss[2 + i]));
    solve(L, S1, S2, q);
  }
}

function solve(L, S1, S2, q) {
  var l = Math.sqrt(q);
  var s = Math.cos(Math.PI / 4) * Math.abs(S2 - S1);
  console.log((L - l) / s);
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

