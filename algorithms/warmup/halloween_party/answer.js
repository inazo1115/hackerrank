"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {
    var K      = parseInt(inputs[1 + test_case]);
    var middle = K / 2;
    var max    = 0;
    for(var i = 0; i <= middle; i++) {
      var n = i * (K - i);
      if(n > max) max = n;
    }
    console.log(max);
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

