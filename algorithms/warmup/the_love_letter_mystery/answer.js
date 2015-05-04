"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var i = 0; i < T; i++) {
    var test_str    = inputs[i + 1];
    var length      = parseInt(test_str.length);
    var half_length = parseInt(length / 2);

    var answer = 0;
    for(var j = 0; j < half_length; j++) {
      var prefix = test_str[j];
      var suffix = test_str[length - 1 - j];
      var pre_char_code = prefix.charCodeAt(0);
      var suf_char_code = suffix.charCodeAt(0);
      answer += Math.abs(pre_char_code - suf_char_code);
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

