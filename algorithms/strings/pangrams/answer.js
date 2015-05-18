"use strict";

function processData(input) {
  //Enter your code here

  var a = "a".charCodeAt(0);
  var z = "z".charCodeAt(0);
  var A = "A".charCodeAt(0);
  var Z = "Z".charCodeAt(0);
  
  var alphabet = new Array(26);
  for(var i = 0; i < alphabet.length; i++) alphabet[i] = false;
  
  for(var i = 0; i < input.length; i++) {
    var c = input.charCodeAt(i);
    if(a <= c && c <= z) {
      alphabet[c - a] = true;
    } else if(A <= c && c <= Z) {
      alphabet[c - A] = true;
    }
  }
  
  var is_pangram = alphabet.reduce(function(l, r) { return l && r; });
  console.log(is_pangram ? "pangram" : "not pangram");
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

