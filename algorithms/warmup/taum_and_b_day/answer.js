"use strict";

function processData(input) {
  //Enter your code here

  var I = input.split("\n");
  var T = parseInt(I[0]);

  for(var test = 0; test < T; test++) {

    var _BW  = I[1 + test * 2].split(" ");
    var _XYZ = I[2 + test * 2].split(" ");
    var B = parseInt(_BW[0]);
    var W = parseInt(_BW[1]);
    var X = parseInt(_XYZ[0]);
    var Y = parseInt(_XYZ[1]);
    var Z = parseInt(_XYZ[2]);
    
    X = Math.min(X, Y + Z);
    Y = Math.min(Y, X + Z);

    console.log(B * X + W * Y);
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

