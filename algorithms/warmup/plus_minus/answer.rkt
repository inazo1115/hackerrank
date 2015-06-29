#lang racket

; solve
(define (solve N nums)
  (lambda (p) (real->double-flonum (/ (length (filter p nums))
                                      N)))
  )

; main
(define N (string->number (read-line)))
(define nums (map string->number (string-split (read-line) " ")))
(define f (solve N nums))
(displayln (f (lambda (x) (> x 0))))
(displayln (f (lambda (x) (< x 0))))
(displayln (f (lambda (x) (eq? x 0))))

