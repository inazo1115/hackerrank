"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var T = parseInt(inputs[0]);
  for(var i = 0; i < T; i++) {
    var _NK = inputs[1 + 3 * i].split(" ").map(function(e) { return parseInt(e)});
    var N = _NK[0];
    var K = _NK[1];
    var A = inputs[2 + 3 * i].split(" ").map(function(e) { return parseInt(e)});
    var B = inputs[3 + 3 * i].split(" ").map(function(e) { return parseInt(e)});
    console.log(solve(N, K, A, B) ? "YES" : "NO");
  }
}

function solve(N, K, A, B) {
  A.sort(function(l, r) { return l - r; });
  B.sort(function(l, r) { return r - l; });
  for(var i = 0; i < N; i++) {
    if(A[i] + B[i] < K) return false;
  }
  return true;
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

