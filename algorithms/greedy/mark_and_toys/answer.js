"use strict";

function processData(input) {
  var inputs = input.split(" ");
  var N = parseInt(inputs[0]);
  var K = parseInt(inputs[1]);
  var toys = input.split("\n")[1].split(" ").map(function(e) {
               return parseInt(e);
             });
  console.log(solve(N, K, toys));
}

function solve(N, K, toys) {
  toys.sort(function(l, r) {
    return l - r;
  });
  var sum = 0;
  for(var i = 0; i < N; i++) {
    if(sum + toys[i] > K) return i;
    sum += toys[i];
  }
  return N;
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

