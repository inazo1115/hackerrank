"use strict";

var node = function(_n) {
  this.is_leaf = true;
  this.weight  = 1
  this.arrow   = -1;
};

function processData(input) {
  //Enter your code here
  
  var inputs = input.split("\n");
  var _NM    = inputs[0].split(" ");
  var N      = parseInt(_NM[0]);
  var M      = parseInt(_NM[1]);
  
  var nodes  = [];
  var queue  = [];
  
  // node init
  for(var i = 0; i< N; i++) {
    nodes.push(new node());
  }
  
  // edge init
  for(var i = 0; i < M; i++) {
    var edge = inputs[i + 1].split(" ");
    var ui   = parseInt(edge[0]) - 1;
    var vi   = parseInt(edge[1]) - 1;
    nodes[ui].arrow   = vi;
    nodes[vi].is_leaf = false;
  }
  
  //queue init
  for(var i = 0; i< N; i++) {
    var n = nodes[i];
    if(n.is_leaf) queue.push(n);
  }
  
  // process
  var answer = 0;
  while(queue.length > 0) {
    
    // get node
    var n = queue.shift();
    
    // is root
    if(n.arrow == -1) continue;
    
    // prepare next node
    var u = nodes[n.arrow];
    if(!u.is_leaf) {
      u.is_leaf = true;
      queue.push(u);
    }
    
    if(n.weight % 2 == 0) answer++;             // even
    else                  u.weight += n.weight; // odd
  }
  
  console.log(answer);
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

