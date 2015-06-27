#lang racket

(define vr vector-ref)

(define (preprocess N nums)
  (define N_ (string->number N))
  (define nums_ (map (lambda (x) (string->number x))
                     (string-split nums " ")))
  (vector N_ nums_))

(define (solve N nums)
  (foldr + 0 nums))

; main
(define v (preprocess (read-line) (read-line)))
(display (solve (vr v 0) (vr v 1)))

