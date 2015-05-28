"use strict";

function processData(input) {
  var ss = input.split("\n");
  var T = parseInt(ss[0]);
  for(var i = 0; i < T; i++) {
    var N = parseInt(ss[1 + i * 2]);
    var A = ss[2 + i * 2].split(" ").map(function(e) { return parseInt(e); });
    console.log(solve(N, A));
  }
}

function solve(N, A) {
  if(A.length < 2) return "YES";

  var idx_a = 0;
  var sum_a = 0;
  var idx_b = N - 1;
  var sum_b = 0;

  while(true) {
    if(sum_a < sum_b) {
      sum_a += A[idx_a];
      idx_a++;      
    } else {
      sum_b += A[idx_b];
      idx_b--;
    }
    if(idx_b == idx_a) break;
  }
  if(sum_a == sum_b) return "YES";
  else return "NO";
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

