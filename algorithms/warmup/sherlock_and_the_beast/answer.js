"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {
    var N = parseInt(inputs[1 + test_case]);
    solve(N);
  }
}

function solve(num) {
  var n = num;
  var three = Math.floor(n / 3);
  n = n % 3;
  
  if(n == 0) {
    for(var i = 0; i < three; i++) {
      process.stdout.write("555");
    }
    console.log("");
    return;
  }
  
  if(n == 1) {
    if(three < 3) {
      console.log("-1");
    } else {
      for(var i = 0; i < three - 3; i++) {
        process.stdout.write("555");
      }
      console.log("3333333333");
    }
    return;
  }
  
  if(n == 2) {
    if(three < 1) {
      console.log("-1");
    } else {
      for(var i = 0; i < three - 1; i++) {
        process.stdout.write("555");
      }
      console.log("33333");
    }
    return;
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

