#lang racket

; [integer] -> [integer]
(define (solve ar)
  (append (filter (lambda (x) (< x (car ar))) ar)
          (filter (lambda (x) (>= x (car ar))) ar)
          ))

(define n (string->number (read-line)))
(define ar (map (lambda (x) (string->number x))
                (string-split (read-line) " ")))

(displayln (string-join (map (lambda (x) (number->string x))
                           (solve ar))))

