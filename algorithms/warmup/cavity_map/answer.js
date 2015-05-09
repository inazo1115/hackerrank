"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var n      = parseInt(inputs[0]);

  if(n < 3) {
    for(var i = 0; i < n; i++) console.log(inputs[1 + i]);
    return;
  }

  // make field
  var field = [];
  for(var i = 0; i < n; i++) {
    var line = inputs[1 + i];
    field.push([]);
    for(var j = 0; j < n; j++) {
      field[i].push(line[j]); // type of field is "Array<String>"
    }
  }
  
  // exec
  for(var i = 1; i < n - 1; i++) {
    for(var j = 1; j < n - 1; j++) {
      var v = parseInt(field[i][j]);
      if(field[i - 1][j] == "X" || parseInt(field[i - 1][j]) >= v) continue; // upper
      if(field[i + 1][j] == "X" || parseInt(field[i + 1][j]) >= v) continue; // lower
      if(field[i][j - 1] == "X" || parseInt(field[i][j - 1]) >= v) continue; // left
      if(field[i][j + 1] == "X" || parseInt(field[i][j + 1]) >= v) continue; // right
      field[i][j] = "X";
    }
  }

  // output
  for(var i = 0; i < n; i++) {
    console.log(field[i].join(""));
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

