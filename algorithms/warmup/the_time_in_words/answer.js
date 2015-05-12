"use strict";

var nums = ["one", "two", "three", "four", "five",
            "six", "seven", "eight", "nine", "ten",
            "eleven", "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var H = parseInt(inputs[0]);
  var M = parseInt(inputs[1]);

  if(M == 0) {
    console.log(nums[H - 1] + " o' clock");
  } else if(M == 1) {
    console.log("one minute past " + nums[H - 1]);
  } else if(M == 15){
    console.log("quarter past " + nums[H - 1]);
  } else if(M == 30) {
    console.log("half past " + nums[H - 1]);
  } else if(M == 45) {
    console.log("quarter to " + nums[H % 12]);
  } else if(M == 59) {
    console.log("one minute to " + nums[H % 12]);
  } else if(M <= 20) {
    console.log(nums[M - 1] + " minutes past " + nums[H - 1]);
  } else if(M <= 29) {
    var n = M - 20;
    console.log("twenty " + nums[n - 1] + " minutes past " + nums[H - 1]);
  } else if(M <= 39) {
    var n = (60 - M) - 20;
    console.log("twenty " + nums[n - 1] + " minutes to " + nums[H % 12]);
  } else {
    console.log(nums[60 - M - 1] + " minutes to " + nums[H % 12]);
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

