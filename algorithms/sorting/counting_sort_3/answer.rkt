#lang racket

(define *foo* 0)

(define (process!)
  (let ([x (string->number (car (string-split (read-line) " ")))])
    (vector-set! vec x (add1 (vector-ref vec x)))
    ))

(define (plus! times)
  (for-each (lambda (_) (set! *foo* (add1 *foo*)))
            (range times)))

;; main
(define n (string->number (read-line)))
(define vec (make-vector 100))
(for-each (lambda (_) (process!))
          (range n))

(for-each (lambda (i) (begin (plus! (vector-ref vec i))
                             (display (string-append (number->string *foo*) " "))))
          (range (vector-length vec)))
