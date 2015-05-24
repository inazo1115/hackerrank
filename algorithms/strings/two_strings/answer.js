"use strict";

function processData(input) {
  var ss = input.split("\n");
  var T = parseInt(ss[0]);
  for(var i = 0; i < T; i++) {
    var A = ss[1 + 2 * i];
    var B = ss[2 + 2 * i];
    console.log(solve(A, B));
  }
}

function solve(A, B) {
  var a = "a".charCodeAt(0);
  var arr0 = new Array(26);
  var arr1 = new Array(26);
  for(var i = 0; i < 26; i++) {
    arr0[i] = 0;
    arr1[i] = 0;
  }
  A.split("").forEach(function(e) {
    var c = e.charCodeAt(0) - a;
    arr0[c]++;
  });
  B.split("").forEach(function(e) {
    var c = e.charCodeAt(0) - a;
    arr1[c]++;
  });
  for(var i = 0; i < 26; i++) {
    if(arr0[i] > 0 && arr1[i] > 0) return "YES";
  }
  return "NO";
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

