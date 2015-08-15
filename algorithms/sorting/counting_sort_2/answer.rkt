#lang racket

(define (process! lis vec)
  (for-each (lambda (e) (vector-set! vec e (add1 (vector-ref vec e))))
            lis))

(define (p! num times)
  (for-each (lambda (_) (display (string-append (number->string num) " ")))
            (range times)))

(define n (string->number (read-line)))
(define lis (map string->number
                 (string-split (read-line) " ")))
(define vec (make-vector 100))
(process! lis vec)

(for-each (lambda (i) (p! i (vector-ref vec i)))
          (range (vector-length vec)))
