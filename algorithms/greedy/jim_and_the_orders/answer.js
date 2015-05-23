"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var n = parseInt(inputs[0]);
  var fans = inputs.slice(1).map(function(e) {
               return e.split(" ").map(function(e) {
                 return parseInt(e);
               });
             });
  console.log(solve(n, fans));
}

function solve(n, fans) {
  var arr = [];
  for(var i = 0; i < n; i++) {
    arr.push([i + 1, fans[i][0] + fans[i][1]]);
  }
  arr.sort(function(l, r) {
    return l[1] - r[1];
  });
  return arr.map(function(e) {
           return e[0];
         }).join(" ");
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

