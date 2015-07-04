#lang racket

; [integer] -> [integer]
(define (quick ar)
  (if (null? ar)
      ar
      (let ([xs (append (quick (filter (lambda (x) (< x (car ar))) ar))
                        (list (car ar))
                        (quick (filter (lambda (x) (> x (car ar))) ar)))])
        (when (>= (length xs) 2)
          (displayln-integer-list xs))
        xs)))

; [integer] -> '()
(define (displayln-integer-list xs)
  (displayln (string-join (map (lambda (x) (number->string x))
                               xs))))

(define n (string->number (read-line)))
(define ar (map (lambda (x) (string->number x))
                (string-split (read-line) " ")))

(define _ (quick ar))

