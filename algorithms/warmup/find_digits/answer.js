"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var i = 0; i < T; i++) {
    var N_str = inputs[1 + i];
    var N     = parseInt(N_str);

    var answer    = 0;
    var N_str_len = N_str.length;
    for(var j = 0; j < N_str_len; j++) {
      var x = parseInt(N_str[j]);
      if(N % x == 0) answer++;
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

