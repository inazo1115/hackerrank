"use strict";

function processData(input) {
  //Enter your code here

  var inputs  = input.split("\n");
  var N       = parseInt(inputs[0]);
  var sticks  = [];
  inputs[1].split(" ").forEach(function(e) { sticks.push(parseInt(e)); });

  while(sticks.length > 0) {
    console.log(sticks.length);
    var min = 1001;
    var sticks2 = [];
    sticks.forEach(function(e) { if(e < min) min = e; });
    sticks.forEach(function(e) { var x = e - min; if(x > 0 ) sticks2.push(x); });
    sticks = sticks2;
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

