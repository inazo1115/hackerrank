"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {
    var N = parseInt(inputs[1 + test_case]);
    solve(N);
  }
}

function solve(num) {
  var n = num;
  var fifteen = Math.floor(n / 15);
  n = n % 15;

  console.log(num, fifteen, n);

  function f() {
    for(var i = 0; i < fifteen; i++) {
      process.stdout.write("555555555555555");
    }
  }

  switch(n) {
    case 13:
    f();
    console.log("5553333333333");
    break;

    case 12:
    f();
    console.log("555555555555");
    break;

    case 11:
    f();
    console.log("55555533333");
    break;

    case 10:
    f();
    console.log("3333333333");
    break;

    case 9:
    f();
    console.log("555555555");
    break;

    case 8:
    f();
    console.log("55533333");
    break;

    case 6:
    f();
    console.log("555555");
    break;

    case 5:
    f();
    console.log("33333");
    break;

    case 3:
    f();
    console.log("555");
    break;

    case 0:
    f();
    console.log("");
    break;

    default:
    console.log(-1);    
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

