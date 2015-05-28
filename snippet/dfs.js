"use strict";

var m = 4;
var n = 4;
var field =
    [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 0, 1, 0],
      [1, 0, 1, 0]
    ];

console.log(solve(m, n, field));

function solve(m, n, field) {

  function dfs(x, y) {
    field[x][y] = 0;
    var ret = 1;
    for(var dx = -1; dx <= 1; dx++) {
      for(var dy = -1; dy <= 1; dy++) {
        var nx = x + dx;
        var ny = y + dy;
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

