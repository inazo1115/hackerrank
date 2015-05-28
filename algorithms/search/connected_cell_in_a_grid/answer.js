"use strict";

function processData(input) {
  var ss = input.split("\n");
  var m = parseInt(ss[0]);
  var n = parseInt(ss[1]);
  var field = ss.slice(2).map(function(e) {
    return e.split(" ").map(function(e) {
      return parseInt(e);
    })
  });
  console.log(solve(m, n, field));
}

function solve(m, n, field) {

  function dfs(x, y) {
    field[x][y] = 0;
    var ret = 1;
    for(var i = -1; i <= 1; i++) {
      for(var j = -1; j <= 1; j++) {
        var nx = x + i;
        var ny = y + j;
        if(0 <= nx && nx < m &&
           0 <= ny && ny < n &&
           field[nx][ny] == 1) {
          ret += dfs(nx, ny);
        }
      }
    }
    return ret;
  }
  
  var max = 0;
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if(field[i][j] == 1) {
        var num = dfs(i, j);
        max = Math.max(max, num);
      }
    }
  }
  return max;
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

