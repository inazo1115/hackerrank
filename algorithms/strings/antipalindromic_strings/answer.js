"use strict";

function processData(input) {
  var ss = input.split("\n");
  var T = parseInt(ss[0]);
  for(var i = 0; i < T; i++) {
    var N = parseInt(ss[1 + i].split(" ")[0]);
    var M = parseInt(ss[1 + i].split(" ")[1]);
    solve(N, M);
  }
}

function solve(N, M) {
  console.log(N, M);
}

function isPalindrome(str) {
  for(var i = 0; i < str.length / 2; i++) {
    var a = str.charAt(i);
    var b = str.charAt(str.length - i - 1);
    if(a != b) return false;
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

