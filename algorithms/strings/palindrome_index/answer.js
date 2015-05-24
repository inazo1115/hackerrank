"use strict";

function processData(input) {
  var ss = input.split("\n");
  var T = parseInt(ss[0]);
  for(var i = 0; i < T; i++) {
    console.log(solve(ss[1 + i]));
  }
}

function solve(str) {
  var len = str.length;
  if(len == 1) return -1;
  var ans = [];
  for(var i = 0; i < len / 2; i++) {
    if(str[i] != str[len - i - 1]) {
      if(str[i + 1] == str[len - i - 1] && str[i] == str[len - i - 2]) {
        ans = [i, len - i - 1];
      } else if(str[i + 1] == str[len - i - 1]) {
        return (ans.length == 0) ? i : ans[0];
      } else if(str[i] == str[len - i - 2]) {
        return (ans.length == 0) ? len - i - 1 : ans[1];
      }
    }
  }
  return -1;
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

