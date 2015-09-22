#lang racket

(define (read-list N n)
  (if (eqv? n N)
      '()
      (cons (read) (read-list N (add1 n)))))

(define N (read))
(define A (sort (read-list N 0) <))
(define P (read))
(define Q (read))

(define (calc-min n)
  (foldr (lambda (e v) (if (< (abs (- n e)) v)
                           (abs (- n e))
                           v))
         (abs (- n (car A)))
         (cdr A)))

(define (get-between x lst)
  (if (null? lst)
      '()
      (cons (floor (/ (+ x (car lst)) 2))
            (get-between (car lst) (cdr lst)))))

(define target-nums (filter (lambda (e) (and (< P e) (< e Q)))
                            (get-between (car A) (cdr A))))

(define lst (map (lambda (e) (cons e (calc-min e)))
                 (cons P (cons Q target-nums))))

(define ans (foldl (lambda (e v) (if (or (> (cdr e) (cdr v))
                                         (and (eqv? (cdr e) (cdr v))
                                              (< (car e) (car v))))
                                     e
                                     v))
                   (car lst)
                   (cdr lst)))

(car ans)
