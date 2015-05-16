"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var p = parseInt(inputs[0]);
  var q = parseInt(inputs[1]);
  
  var answer = [];
  for(var i = p; i <= q; i++) {
    if(is_kaprekar(i)) answer.push(i);
  }
  if(answer.length == 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(answer.join(" "));
  }
}

function is_kaprekar(x) {
  var s = String(x * x);
  var l = parseInt(s.slice(0, s.length / 2));
  var r = parseInt(s.slice(s.length / 2));
  if(isNaN(l)) l = 0;
  if(isNaN(r)) r = 0;
  var y = l + r;
  return x == y;
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

