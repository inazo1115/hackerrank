"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {
    var str      = inputs[1 + test_case];
    var len      = str.length;
    var half_len = parseInt(len / 2);

    var msg = "Funny";
    for(var i = 0; i < half_len; i++) {
      var s0 = str.charCodeAt(i);
      var s1 = str.charCodeAt(i + 1);
      var r0 = str.charCodeAt(len - 1 - i);
      var r1 = str.charCodeAt(len - 2 - i);

      if(Math.abs(s0 - s1) != Math.abs(r0 - r1)) {
        msg = "Not Funny";
        break;
      }
    }

    console.log(msg);
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

