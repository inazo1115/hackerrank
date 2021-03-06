"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);

  for(var test_case = 0; test_case < T; test_case++) {

    // prepare subsets
    var N  = parseInt(inputs[1 + test_case * 2]);
    var xs = inputs[2 + test_case * 2].split(" ").slice(0, N)
             .map(function(e) { return parseInt(e); })
             .sort(function(l, r) { return l - r; });
    var uniqed = uniq(xs);
    var subs   = subsets(uniqed).filter(function(e) { return e.length != 0; });
    
    // exec
    var subs_ = subs.map(f);
    var is = subs_.reduce(function(l, r) { return l && r; });
    console.log(is ? "NO" : "YES");
  }
}

var primes = sieve(100000);

function f(e) {
  if(e[0] == 1) return true;
  var div = false;
  for(var i = 0; primes[i] <= e[e.length - 1]; i++) {
    var d = true;
    for(var j = 0; j < e.length; j++) {
      if(e[j] % primes[i] != 0) d = false;
    }
    div = div || d;
  }
  return div;
}

function sieve(n) {
  var primes = [];
  var arr = new Array(n + 1);
  for(var i = 0; i <= n; i++) arr[i] = true;
  arr[0] = false;
  arr[1] = false;
  for(var i = 2; i <= n; i++) {
    if(arr[i]) {
      primes.push(i);
      for(var j = i * 2; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return primes;
}

function uniq(sorted) {
  var tmp    = -1;
  var uniqed = [];
  sorted.forEach(
    function(e) {
      if(tmp != e) {
        uniqed.push(e);
        tmp = e;
      }
    }
  )
  return uniqed;
}

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

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});

