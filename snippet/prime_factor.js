"use strict";

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

// test0
console.log("expected: 100 -> [2, 2, 5, 5]");
console.log("prime_factor(100) is", prime_factor(100));

// test1
console.log("expected: 101 -> [101]");
console.log("prime_factor(101) is", prime_factor(101));

