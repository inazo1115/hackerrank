"use strict";

function processData(input) {

  var ss = input.split("\n");
  var N = parseInt(ss[0]);
  for(var i = 0; i < N; i++) {
    var keyword = ss[1 + i * 2];
    var words = ss[2 + i * 2].split(" ");
    solve(keyword, words.join(""), words.length)
  }
}

function solve(keyword, words, n) {
  console.log(keyword, words, n);
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

