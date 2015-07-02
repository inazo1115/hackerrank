#lang racket

; solve
#|
;; tail recursion
(define (factrial acc n)
  (if (eqv? n 1)
      acc
      (factrial (* acc n) (- n 1))))
|#

(define (factrial n)
  (if (eqv? n 1)
      1
      (* n (factrial (- n 1)))))

; main
(define N (read))
(displayln (factrial N))

