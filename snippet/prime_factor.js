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

// test
console.log("prime_factor(100)");
console.log(prime_factor(100));

console.log("prime_factor(101)");
console.log(prime_factor(101));

