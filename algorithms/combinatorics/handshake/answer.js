"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = inputs[0];

  for(var test_case = 0; test_case < T; test_case++) {
    var N = parseInt(inputs[1 + test_case]);
    var answer = 0;
    for(var i = N - 1; i >= 1; i--) {
      answer += i;
    }
    console.log(answer);
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

