"use strict";

function processData(input) {
  //Enter your code here

  var a        = "a".charCodeAt(0);
  var alphabet = new Array(26);
  for(var i = 0; i < alphabet.length; i++) alphabet[i] = 0;

  for(var i = 0; i < input.length; i++) {
    var x = input.charCodeAt(i) - a;
    alphabet[x] = (alphabet[x] + 1) % 2
  }
  
  var n = alphabet.reduce(function(l, r) { return l + r; });
  if(n <= 1) console.log("YES");
  else       console.log("NO");
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

