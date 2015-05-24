"use strict";

function processData(input) {
  var inputs = input.split("\n");
  console.log(solve(inputs[0], inputs[1]));
}

function solve(A, B) {
  var a = "a".charCodeAt(0);
  var As = A.split("");
  var Bs = B.split("");
  var As_ = new Array(26);
  var Bs_ = new Array(26);
  for(var i = 0; i < 26; i++) {
    As_[i] = 0;
    Bs_[i] = 0;
  }
  for(var i = 0; i < As.length; i++) {
    var cc = As[i].charCodeAt(0) - a;
    As_[cc]++;
  }
  for(var i = 0; i < Bs.length; i++) {
    var cc = Bs[i].charCodeAt(0) - a;
    Bs_[cc]++;
  }
  var ret = 0;
  for(var i = 0; i < 26; i++) {
    ret += Math.abs(As_[i] - Bs_[i]);
  }
  return ret;
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

