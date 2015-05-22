"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var N      = parseInt(inputs[0]);
  var rocks  = inputs.slice(1);
  console.log(solve(N, rocks));
}

function solve(N, rocks) {
  var a   = "a".charCodeAt(0);
  var xs0 = new Array(26);
  var xs1 = new Array(26);
  for(var i = 0; i < xs0.length; i++) {
    xs0[i] = true;
    xs1[i] = false;
  }
  
  for(var i = 0; i < N; i++) {
    for(var j = 0; j < rocks[i].length; j++) {
      var c = rocks[i].charCodeAt(j) - a;
      xs1[c] = true;
    }
    and(xs0, xs1);
  }
  return count(xs0);
}

function and(xs0, xs1) {
  for(var i = 0; i < xs0.length; i++) {
    xs0[i] = xs0[i] && xs1[i];
    xs1[i] = false;
  }
}

function count(xs) {
  var ret = 0;
  for(var i = 0; i < xs.length; i++) {
    if(xs[i]) ret++;
  }
  return ret;
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

