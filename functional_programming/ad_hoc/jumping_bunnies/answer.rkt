#lang racket

(define (gcd x y)
  (if (zero? y)
      x
      (gcd y (modulo x y))))

(define (lcm x y)
  (/ (* x y) (gcd x y)))

; main
(void (read-line))
(define xs (map string->number
                (string-split (read-line) " ")))

(foldr (lambda (e v) (lcm e v))
       1
       xs)
