"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var _NM = inputs[0].split(" ");
  var N = parseInt(_NM[0]);
  var M = parseInt(_NM[1]);
  var sss = inputs.slice(1, 1 + N);
  solve(N, M, sss);
}

function solve(N, M, sss) {
  console.log(N, M, sss);
  console.log(hoge(0));

  function hoge(n) {
    if(n == 10000) return 0;
    else return hoge(n + 1);
  }

  return

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

