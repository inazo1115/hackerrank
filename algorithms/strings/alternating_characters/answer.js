"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);
  
  for(var i = 0; i < T; i++) {
    var s = inputs[1 + i];
    var l = s.length;
    var s_ = uniq(s);
    var l_ = s_.length;
    console.log(l - l_);
  }
}

function uniq(str) {
  if(str.length <= 1) return str;
  var s = str[0];
  var ret = [s];
  for(var i = 1; i < str.length; i++) {
    var c = str.charAt(i);
    if(s != c) {
      ret.push(c);
      s = c;
    }
  }
  return ret;
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

