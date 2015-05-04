"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var s      = parseInt(inputs[0]);
  if(s == 1) {
    console.log(inputs[1]);
    return;
  }

  var ar     = inputs[1].split(" ");
  var V      = parseInt(ar[s - 1]);
  var sorted = [];
  function show() { console.log(ar.slice(0, i + 1).concat(sorted).join(" ")); }

  for(var i = s - 2; i >= 0; i--) {
    var x = parseInt(ar[i]);
    if(x <= V) break;
    sorted = [x].concat(sorted);
    show();
  }
  sorted = [V].concat(sorted);
  show();
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

