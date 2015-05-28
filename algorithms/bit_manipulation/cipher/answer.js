"use strict";

function processData(input) {
  var ss = input.split("\n");
  var N = parseInt(ss[0].split(" ")[0]);
  var K = parseInt(ss[0].split(" ")[1]);
  var S = ss[1].split("").map(function(e) {
    return parseInt(e);
  });
  console.log(solve(N, K, S).join(""));
}

function solve(N, K, S) {
  var pre = 0;
  var ret = [];
  for(var i = 0; i < N; i++) {
    var now = S[i];
    var x = 0;
    if((i - K + 1) > 0) {
      x = ret[i - K];
    }
    ret.push(xor(x, xor(pre, now)));
    pre = now;
  }  
  return ret;
}

function xor(x, y) {
  return Math.abs(x - y);
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

