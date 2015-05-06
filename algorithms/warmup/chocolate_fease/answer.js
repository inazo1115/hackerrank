"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {
    var _NCM = inputs[1 + test_case].split(" ");
    var N    = parseInt(_NCM[0]);
    var C    = parseInt(_NCM[1]);
    var M    = parseInt(_NCM[2]);

    var answer  = parseInt(N / C);
    var wrapper = answer;
    while(true) {
      if(wrapper < M) break;

      var n = parseInt(wrapper / M);
      wrapper -= M * n;
      answer  += n;
      wrapper += n;
    }
    console.log(answer);
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

