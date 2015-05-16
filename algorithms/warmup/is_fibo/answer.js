"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var N      = parseInt(inputs[0]);
  
  for(var i = 0; i < N; i++) {
    var x = parseInt(inputs[1 + i]);
    if(is_fibo(x)) console.log("IsFibo");
    else           console.log("IsNotFibo");
  }
}

function is_fibo(num) {
  if(num <= 1) return true;
  var x0 = 0;
  var x1 = 1;
  while(true) {
    var x2 = x0 + x1;
    if(x2 == num) return true;
    if(x2 > num)  return false;
    x0 = x1;
    x1 = x2;
  }
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

