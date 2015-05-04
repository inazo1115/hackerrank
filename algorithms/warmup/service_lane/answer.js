"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split('\n');
  var _NT    = inputs[0].split(" ");
  var N      = parseInt(_NT[0]);
  var T      = parseInt(_NT[1]);
  var widths = inputs[1].split(" ");

  for(var iter = 0; iter < T; iter++) {
    var test_case = inputs[iter + 2].split(" ");
    var i         = parseInt(test_case[0]);
    var j         = parseInt(test_case[1]);
    
    var min = 4;
    for(var k = i; k <= j; k++) {
      var width_k = parseInt(widths[k]);
      if(width_k < min) min = width_k;
    }

    console.log(min);
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

