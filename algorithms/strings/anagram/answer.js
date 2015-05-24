"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var T = parseInt(inputs[0]);
  inputs.slice(1, 1 + T).forEach(function(e) {
    console.log(prepare(e));
  });
}

function prepare(str) {
  var len = str.length;
  if(len % 2 != 0) return -1;
  return solve(str.slice(0, len / 2), str.slice(len / 2));
}

function solve(s1, s2) {
  var A = "a".charCodeAt(0);
  var a = new Array(26);
  var b = new Array(26);
  for(var i = 0; i < 26; i++) {
    a[i] = 0;
    b[i] = 0;
  }
  s1.split("").forEach(function(e) {
    var c = e.charCodeAt(0) - A;
    a[c]++;
  });
  s2.split("").forEach(function(e) {
    var c = e.charCodeAt(0) - A;
    b[c]++;
  });
  var ret = 0;
  for(var i = 0; i < 26; i++) {
    ret += Math.abs(a[i] - b[i]);
  }
  return ret / 2;
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

