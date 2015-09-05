#lang racket

(define (fib n)
  (cond [(<= n 1) 0]
        [(eqv? n 2) 1]
        [(+ (fib (- n 1)) (fib (- n 2)))]))

(fib (read))
