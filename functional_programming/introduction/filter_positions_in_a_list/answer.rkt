#lang racket

(define p displayln)

(define D (read))

(define (read*)
  (let ([x (read)])
    (if (eof-object? x)
        '()
        (cons x (read*)))))

(define input (read*))

(for-each p
          (map car
               (filter (lambda (e) (eqv? (modulo (cdr e) 2) 0))
                       (map (lambda (e i) (cons e i))
                            input
                            (range (length input))))))
