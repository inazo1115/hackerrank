"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var N = parseInt(inputs[0]);
  var W = inputs[1].split(" ").map(function(e) { return parseInt(e); });
  console.log(solve(N, W));
}

function solve(N, W) {
  W.sort(function(l, r) { return l - r; });
  var num = 1;
  var now_weight = W[0];
  for(var i = 1; i < N; i++) {
    if(W[i] > now_weight + 4) {
      now_weight = W[i];
      num++;
    }
  }
  return num;
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

