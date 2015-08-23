#lang racket

(define (solve px py qx qy)
  (display (+ qx (- qx px)))
  (display " ")
  (display (+ qy (- qy py)))
  (newline))

(define T (read))
(for-each (lambda (_) (solve (read) (read) (read) (read)))
          (range T))
