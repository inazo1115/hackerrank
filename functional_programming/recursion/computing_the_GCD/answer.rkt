#lang racket

(define (gcd x y)
  (if (eqv? x y)
      x
      (let-values ([(x y) (swap > x y)])
        (gcd (- x y) y))))

(define (swap pred x y)
  (if (pred x y)
      (values x y)
      (values y x)))

(define x (read))
(define y (read))
(gcd (max x y) (min x y))
