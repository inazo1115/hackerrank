#lang racket

(define (solve a b)
  (+ a b))

; main
(let ([a (read)]
      [b (read)])
  (display (solve a b)))

