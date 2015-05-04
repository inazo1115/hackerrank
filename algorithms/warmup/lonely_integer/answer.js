"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var N      = parseInt(inputs[0]);
  var A      = inputs[1].split(" ");
  var xs     = new Array(101);

  for(var i = 0; i < N; i++) {
    var num = parseInt(A[i]);
    if(xs[num] == undefined) xs[num] = 1;         // first time
    else if(xs[num] == 1)    xs[num] = undefined; // second time
  }

  for(var i = 0; i <= 100; i++) {
    if(xs[i] != undefined) {
      console.log(i);
      break;
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

