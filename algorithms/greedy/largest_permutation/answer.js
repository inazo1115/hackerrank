"use strict";

function processData(input) {
  var N = parseInt(input.split(" ")[0]);
  var K = parseInt(input.split(" ")[1]);
  var arr = input.split("\n")[1].split(" ").map(function(e) { return parseInt(e); });
  console.log(solve(N, K, arr).join(" "));
}

function solve(N, K, arr) {
  var num    = N; // target of swap
  var count  = 0;

  while(count < K && num > 0) {
    var index0 = N - num;
    var index1 = arr.indexOf(num);
    if(index0 != index1) {
      swap(arr, index0, index1);
      count++
    }
    num--;
  }
  return arr;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i]  = arr[j];
  arr[j]  = tmp;
  return arr;
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

