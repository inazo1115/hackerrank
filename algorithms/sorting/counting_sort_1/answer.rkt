#lang racket

(define (process! lis vec)
  (for-each (lambda (e) (vector-set! vec e (add1 (vector-ref vec e))))
            lis))

(define n (string->number (read-line)))
(define lis (map string->number
                 (string-split (read-line) " ")))
(define vec (make-vector 100))
(process! lis vec)
(displayln (string-join (map number->string (vector->list vec))))
