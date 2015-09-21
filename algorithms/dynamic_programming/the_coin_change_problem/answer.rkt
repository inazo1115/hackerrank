#lang racket

(define (solve N coins sum)
  (cond [(or (> sum N) (null? coins)) (list 'fail)]
        [(eqv? sum N) (list 'success)]
        [else (list (cons (car coins) (solve N coins (+ sum (car coins))))
                    (solve N (cdr coins) sum))]))

(define (read-list n)
  (if (zero? n)
      '()
      (cons (read) (read-list (sub1 n)))))

(define N (read))
(define M (read))
(length (filter (lambda (e) (eq? e 'success))
                (flatten (solve N (read-list M) 0))))
