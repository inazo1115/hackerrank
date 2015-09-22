#lang racket

(define (read-list N n)
  (if (eqv? n N)
      '()
      (cons (read) (read-list N (add1 n)))))

(define N (read))
(define A (read-list N 0))
(define P (read))
(define Q (read))

(define (calc-min n)
  (foldr (lambda (e v) (if (< (abs (- n e)) v)
                           (abs (- n e))
                           v))
         (abs (- n (car A)))
         (cdr A)))

(define lst0 (map (lambda (e) (cons e (calc-min e)))
                  (range P (add1 Q))))

(define lst1 (foldl (lambda (e v) (if (or (> (cdr e) (cdr v))
                                          (and (eqv? (cdr e) (cdr v))
                                               (< (car e) (car v))))
                                      e
                                      v))
                    (car lst0)
                    (cdr lst0)))

(car lst1)
