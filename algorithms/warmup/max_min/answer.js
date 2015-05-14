"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var N      = parseInt(inputs[0]);
  var K      = parseInt(inputs[1]);

  var list = [];
  for(var i = 0; i < N; i++) list.push(parseInt(inputs[2 + i]));
  list.sort(function(l, r) { return l - r; });
  
  var answer = list[list.length - 1];
  for(var i = 0; i < (N - K + 1); i++) {
    var max = list[i + K - 1];
    var min = list[i];
    var x   = max - min;
    if(x < answer) answer = x;
  }
  
  console.log(answer);
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

