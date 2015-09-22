#lang racket

; e.g.) "abc\ndef\nghi" -> '((#\a #\b #\c) (#\d #\e #\f) (#\g #\h #\i))
(define (read-grid)
  (let ([row (read-line)])
    (if (eof-object? row)
        '()
        (cons (string->list row) (read-grid)))))

; list[list[char]]
(read-grid)
