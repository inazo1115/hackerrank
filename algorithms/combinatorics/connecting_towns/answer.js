"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);
  
  for(var test_case = 0; test_case < T; test_case++) {
    var N      = parseInt(inputs[1 + test_case * 2]);
    var routes = inputs[2 + test_case * 2].split(" ");
    
    var answer = 1;
    for(var i = 0; i < N - 1; i++) {
      var n = parseInt(routes[i]);
      answer *= n;
      answer %= 1234567;
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

