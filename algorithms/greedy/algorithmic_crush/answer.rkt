#lang racket

(define (vector-update-range! vec a b k)
  (for-each (lambda (e) (vector-update! vec e k))
            (range (sub1 a) b)))

(define (vector-update! vec n k)
  (vector-set! vec n (+ k (vector-ref vec n))))

(define (process-line vec)
  (let ([a (read)]
        [b (read)]
        [k (read)])
    (vector-update-range! vec a b k)))

(let* ([N (read)]
       [M (read)]
       [vec (make-vector N)])
  (for-each (lambda (e) (process-line vec))
            (range M))
  (displayln (apply max (vector->list vec))))
