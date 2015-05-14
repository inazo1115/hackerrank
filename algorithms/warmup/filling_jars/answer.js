"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var _NM    = inputs[0].split(" ");
  var N      = parseInt(_NM[0]);
  var M      = parseInt(_NM[1]);

  var answer = 0.0;
  for(var i = 0; i < M; i++) {
    var _abk = inputs[1 + i].split(" ");
    var a    = parseFloat(_abk[0]);
    var b    = parseFloat(_abk[1]);
    var k    = parseFloat(_abk[2]);

    answer += ((b - a + 1) * k) / N;
  }
  console.log(Math.floor(answer));
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

