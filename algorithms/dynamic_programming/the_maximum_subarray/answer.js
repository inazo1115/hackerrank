"use strict";

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var T      = parseInt(inputs[0]);
  
  for(var test_case = 0; test_case < T; test_case++) {
    
    var N = parseInt(inputs[1 + test_case * 2]);
    var A = inputs[2 + test_case * 2].split(" ").map(function(e) { return parseInt(e); });

    var a_0             = A[0];
    var pos_sum         = (a_0 > 0) ? a_0 : 0;
    var max_ending_here = a_0;
    var max_so_far      = a_0;

    var all_nega = true;
    
    for(var i = 1; i < N; i++) {
      var n = A[i];
      if(n > 0) {
        pos_sum += n;
        all_nega = false;
      }
      max_ending_here = Math.max(n, max_ending_here + n);
      max_so_far      = Math.max(max_so_far, max_ending_here);
    }

    if(all_nega) pos_sum = a_0;

    console.log(max_so_far + " " + pos_sum);
  }
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

