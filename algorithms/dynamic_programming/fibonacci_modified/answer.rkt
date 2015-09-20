#lang racket

(define (solve A B N n)
  (if (eqv? n N)
      B
      (solve B (calc B A) N (add1 n))))

(define (calc n m)
  (+ (* n n) m))

; main
(define A (read))
(define B (read))
(define N (read))
(solve A B N 2)
