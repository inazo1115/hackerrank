"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {
    var _NK  = inputs[1 + (test_case * 2)].split(" ");
    var N    = parseInt(_NK[0]);
    var K    = parseInt(_NK[1]);

    var present = inputs[2 + (test_case * 2)]
                  .split(" ")
                  .map(function(e) { return parseInt(e); })
                  .filter(function(e) { return e <= 0; })
                  .length;
    
    var answer = (present >= K) ? "NO" : "YES";

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

