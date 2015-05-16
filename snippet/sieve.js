"use strict";

/**
 * sieve of eratosthenes
 * @param n max number
 */
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

// test
console.log("sieve(100)");
console.log(sieve(100));

