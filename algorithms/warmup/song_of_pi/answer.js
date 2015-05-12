"use strict";

var pi = "31415926535897932384626433833";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {
    var str   = inputs[1 + test_case].split(" ");
    var is_pi = true;
    for(var i = 0; i < str.length; i++) {
      var word = str[i];
      var num  = parseInt(pi[i]);
      if(word.length != num) {
        is_pi = false;
        break;
      }
    }
    var msg = is_pi ? "It's a pi song." : "It's not a pi song.";
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

