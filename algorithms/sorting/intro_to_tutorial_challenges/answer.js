"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var V      = parseInt(inputs[0]);
  var n      = parseInt(inputs[1]);
  var ar     = inputs[2].split(" ");

  for(var i = 0; i < n; i++) {
    var x = parseInt(ar[i]);
    if(x == V) {
      console.log(i);
      return;
    }
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

