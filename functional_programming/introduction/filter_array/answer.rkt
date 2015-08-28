#lang racket

(define p displayln)

(define D (read))

; -> list[number]
(define (read*)
  (let ([x (read)])
    (if (eof-object? x)
        '()
        (cons x (read*)))))

(for-each p
          (filter (lambda (x) (< x D))
                  (read*)))
