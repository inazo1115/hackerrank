"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var s      = parseInt(inputs[0]);
  var ar     = inputs[1].split(" ");
  var sorted = [parseInt(ar[0])];
  
  for(var i = 1; i < s; i++) {
    var x             = parseInt(ar[i]);
    var sorted_length = sorted.length;
    
    for(var j = 0; j <= sorted_length; j++) {
      if(j == sorted_length) {
        sorted = sorted.concat([x]);
        break;
      }
      if(x < sorted[j]) {
        var pre = sorted.slice(0, j);
        var suf = sorted.slice(j, sorted_length);
        sorted = pre.concat([x]).concat(suf);
        break;
      }
    }
    console.log(sorted.concat(ar.slice(i + 1, s)).join(" "));
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

