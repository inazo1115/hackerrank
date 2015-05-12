"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var _NM    = inputs[0].split(" ");
  var N      = parseInt(_NM[0]);
  var M      = parseInt(_NM[1]);
  
  var answers = [];
  for(var i = 0; i < M; i++) answers.push(0);
  
  for(var i = 0; i < N - 1; i++) {
    for(var j = i + 1; j < N; j++) {
      var a = inputs[1 + i];
      var b = inputs[1 + j];
      
      var one = 0;
      for(var k = 0; k < M; k++) {
        if(a[k] == "1" || b[k] == "1") one++;
      }
      answers[one - 1]++;
    }
  }
  
  for(var i = M - 1; i >= 0; i--) {
    if(answers[i] > 0) {
      console.log((i + 1) + "\n" + answers[i]);
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

