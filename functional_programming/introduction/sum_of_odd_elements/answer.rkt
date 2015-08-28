#lang racket

(define (read*)
  (let ([x (read)])
    (if (eof-object? x)
        '()
        (cons x (read*)))))

(apply + (filter odd? (read*)))
