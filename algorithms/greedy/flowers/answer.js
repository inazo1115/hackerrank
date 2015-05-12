"use strict";

function processData(input) {
  //Enter your code here

  var inputs  = input.split("\n");
  var _NK     = inputs[0].split(" ");
  var N       = parseInt(_NK[0]);
  var K       = parseInt(_NK[1]);
  var flowers = inputs[1].split(" ").map(function(e) { return parseInt(e); }).sort().reverse();

  var ans = 0;
  var x   = 0;
  for(var i = 0; i < N; i++) {
    if(i % K == 0) x++;
    ans += x * flowers[i];
  }

  console.log(ans);
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

