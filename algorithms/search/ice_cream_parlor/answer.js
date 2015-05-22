"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var T = parseInt(inputs[0]);
  for(var i = 0; i < T; i++) {
    var M = parseInt(inputs[1 + 3 * i]);
    var N = parseInt(inputs[2 + 3 * i]);
    var flavors = inputs[3 + 3 * i].split(" ").map(function(e) { return parseInt(e); });
    var ans = solve(M, N, flavors);
    console.log(ans[0] + 1, ans[1] + 1);
  }
}

function solve(M, N, xs) {
  for(var i = 0; i < N - 1; i++) {
    for(var j = i + 1; j < N; j++) {
      if(xs[i] + xs[j] == M) return [i, j];
    }
  }
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

