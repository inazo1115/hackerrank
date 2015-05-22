"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var i = 0;
  var T = parseInt(inputs[i++]);
  for(var tc = 0; tc < T; tc++) {
    var N = parseInt(inputs[i++]);
    var G = inputs.slice(i, i + N);
    G = G.map(function(e) { return e.split(""); });
    i += N;
    var msg = solve(N, G) ? "YES" : "NO";
    console.log(msg);
  }
}

function solve(N, G) {
  G.map(function(e) { return e.sort(); });
  for(var i = 0; i < N; i++) {
    for(var j = 0; j < N - 1; j++) {
      if(G[j][i] > G[j + 1][i]) return false;
    }
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

