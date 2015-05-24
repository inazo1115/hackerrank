"use strict";

function processData(input) {
  var ss = input.split("\n");
  var T = parseInt(ss[0]);
  for(var i = 0; i < T; i++) {
    console.log(solve(ss[1 + i]));
  }
}

function solve(str) {
  var ans = 0;
  for(var i = 0; i < str.length - 1; i++) {
    for(var size = 1; size + i < str.length; size++) {
      for(var j = i + 1; size + j <= str.length; j++) {
        var s1 = str.substring(i, i + size);
        var s2 = str.substring(j, j + size);
        if(isAnagram(s1, s2)) ans++;
      }
    }
  }
  return ans;
}

function isAnagram(s1, s2) {
  var A = "a".charCodeAt(0);
  var a = new Array(26);
  var b = new Array(26);
  for(var i = 0; i < 26; i++) {
    a[i] = 0;
    b[i] = 0;
  }
  s1.split("").forEach(function(e) {
    var c = e.charCodeAt(0) - A;
    a[c]++;
  });
  s2.split("").forEach(function(e) {
    var c = e.charCodeAt(0) - A;
    b[c]++;
  });
  for(var i = 0; i < 26; i++) {
    if(a[i] != b[i]) return false;
  }
  return true;
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

