#lang racket

(define foo (map string->number (string-split (read-line) " ")))
(define N (list-ref foo 0))
(define K (list-ref foo 1))
(define Q (list-ref foo 2))
(define arr (list->vector (map string->number (string-split (read-line) " "))))

(define (solve i)
  (define q (string->number (read-line)))
  (displayln (vector-ref arr (modulo (- q K) N)))
  )

(for-each (lambda (i) (solve i))
          (range Q))
