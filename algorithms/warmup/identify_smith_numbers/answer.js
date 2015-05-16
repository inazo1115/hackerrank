"use strict";

function processData(input) {
  //Enter your code here

  var inputs = input.split("\n");
  var N      = parseInt(inputs[0]);

  if(N == 1) {
    console.log(0);
    return;
  }
  
  var x = sum_of_digits(N);
  var y = prime_factor(N).map(
    function(e) {
      if(e < 10) return e;
      return sum_of_digits(e);
    }
  ).reduce(
    function(l, r) {
      return l + r;
    }
  );
  
  var ans = (x == y) ? 1 : 0;
  console.log(ans);
}

function sum_of_digits(x) {
  var s   = String(x);
  var ret = 0;
  for(var i = 0; i < s.length; i++) {
    ret += parseInt(s.charAt(i));
  }
  return ret;
}

function prime_factor(x) {
  var n      = x;
  var answer = [];
  for(var i = 2; i * i <= x; i++) {
    while(n % i == 0) {
      answer.push(i);
      n /= i;
    }
  }
  if(n != 1) answer.push(n);
  return answer;
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

