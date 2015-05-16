"use strict";

function fibonacci(max) {
  var ret = [];
  var x0  = 0;
  var x1  = 1;
  while(true) {
    var x2 = x0 + x1;
    if(x2 > max) break;
    ret.push(x2)
    x0 = x1;
    x1 = x2;
  }
  return ret;
}

// test
console.log("fibonacci(100)");
console.log(fibonacci(100));

