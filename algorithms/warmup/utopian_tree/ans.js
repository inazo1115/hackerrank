'use strict';

function processData(input) {
  var parse_fun = function (s) { return parseInt(s, 10); };
  
  var lines = input.split('\n');
  var T = parse_fun(lines.shift());
  
  var data = lines.splice(0, T).map(parse_fun);
  
  // logic here
  var ans = data.map(grow);
  ans.forEach(function(e) { console.log(e); });
}

function grow(total_cycle) {
  return _grow(1, 0);
  function _grow(now_height, now_cycle) {
    if(total_cycle == now_cycle) return now_height;
    if(now_cycle % 2 == 1) {
      // spring
      now_height += 1;
    } else {
      // summer
      now_height *= 2;
    }
    return _grow(now_height, now_cycle + 1);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });

