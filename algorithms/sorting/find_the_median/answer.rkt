#lang racket

(define len (string->number (read-line)))
(define lis0 (map string->number
                  (string-split (read-line) " ")))
(define lis1 (sort lis0 <))
(list-ref lis1 (quotient len 2))
