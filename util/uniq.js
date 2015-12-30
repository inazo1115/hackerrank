"use strict";

/**
 * @param sorted 'sorted' is sorted array.
 */
function uniq(sorted) {
  var uniqed = [sorted[0]];
  for(var i = 1; i < sorted.length; i++) {
    var x = sorted[i];
    if(x != uniqed[uniqed.length - 1]) uniqed.push(x);
  }
  return uniqed;
}

// test
console.log("uniq([1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6])");
console.log(uniq([1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6]));

