"use strict";

function processData(input) {
  var ss = input.split("\n");
  var s = parseInt(ss[0]);
  var ar = ss[1].split(" ").map(function(e) { return parseInt(e); }).slice(0, s);
  console.log(insertionSort(ar).join(" "));
}

function insertionSort(ar) {
  for(var i = 1; i < ar.length; i++){
    var value = ar[i];
    var j = i - 1;
    while(j >= 0 && ar[j] > value){
      ar[j + 1] = ar[j];
      j = j - 1;
    }
    ar[j + 1] = value;
  }
  return ar;
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

