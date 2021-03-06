"use strict";

function processData(input) {
  var inputs = input.split("\n");
  var N      = parseInt(inputs[0]);
  var strs   = inputs.slice(1);
  solve(N, strs);
}

function solve(N, strs) {
  for(var i = 0; i < N; i++) {
    var x = solve_(strs[i]);
    if(x[0]) {
      console.log(x[1]);
    } else {
      console.log("no answer");
    }
  }
}

function solve_(_str) {
  var str        = _str.split("");
  var is_changed = false;
  var ans        = [];
  for(var i = str.length - 1; i >= 0; i--) {
    var x0 = str.slice(0, i);
    var x1 = str.slice(i).sort(function(l, r) { return l.charCodeAt(0) - r.charCodeAt(0); });
    for(var j = 0; j < x1.length; j++) {
      if(x0[i - 1] < x1[j]) {
        is_changed = true;
        ans = swap(x0.concat(x1), i - 1, i + j).join("");
        return [is_changed, ans];
      }
    }
  }
  return [is_changed, []];
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
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

