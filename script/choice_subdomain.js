"use strict";

var subdomains = [
  "warmup",
  "strings",
  "sorting",
  "search",
  "data_structures",
  "graph_theory",
  "greedy",
  "dynamic_programming",
  "bit_manipulation",
  "regex",
  "number_theory",
  "combinatorics",
  "summations_and_algebra",
  "geometry",
  "probability",
  "game_theory",
  "np_complete",
  "cryptography",
  "code_golf",
  "multiple_choice"
];

/**
 * chice subdomain from algorithms.
 */
var n = Math.floor(subdomains.length * Math.random());
console.log(subdomains[n]);

