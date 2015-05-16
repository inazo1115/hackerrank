"use strict";

/**
 * @param sorted 'sorted' is sorted array. elements of 'sorted' are positive number.
 */
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

// test
console.log("uniq([1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6])");
console.log(uniq([1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6]));

