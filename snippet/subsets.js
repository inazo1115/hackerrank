"use strict";

function subsets(arr) {
  var ret = [[]];
  for(var i = 0; i < arr.length; i++) {
    var ret_ = [];
    for(var j = 0; j < ret.length; j++) {
      var a = ret[j].slice();
      var b = ret[j].slice().concat(arr[i]);
      ret_.push(a);
      ret_.push(b);
    }
    ret = ret_;
  }
  return ret;
}

// test
console.log("subsets([1, 2, 3, 4, 5])");
console.log(subsets([1, 2, 3, 4, 5]));

