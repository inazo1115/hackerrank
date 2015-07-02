#lang racket

; solve
(define (solve d0 m0 y0 d1 m1 y1)
  (cond
    ((> y0 y1) 10000)
    ((and (eqv? y0 y1) (> m0 m1)) (* 500 (- m0 m1)))
    ((and (eqv? y0 y1) (eqv? m0 m1) (> d0 d1)) (* 15 (- d0 d1)))
    (else 0)
    ))

; main
(define d0 (read))
(define m0 (read))
(define y0 (read))
(define d1 (read))
(define m1 (read))
(define y1 (read))
(displayln (solve d0 m0 y0 d1 m1 y1))

