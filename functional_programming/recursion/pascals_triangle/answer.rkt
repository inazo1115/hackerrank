#lang racket

(define p displayln)

(define (p-triangle N)
  (define (p-triangle* n)
    (if (eqv? n N)
        '()
        (cons (row n) (p-triangle* (add1 n)))))
  (p-triangle* 0))

(define (row n)
  (define (row* r)
    (if (< r 0)
        '()
        (cons (expr n r) (row* (sub1 r)))))
  (row* n))

(define (expr n r)
  (/ (factorial n)
     (* (factorial r)
        (factorial (- n r)))))

(define (factorial n)
  (if (zero? n)
      1
      (* n (factorial (sub1 n)))))

(define (pp! row)
  (if (null? row)
      (newline)
      (begin (display (car row))
             (display " ")
             (pp! (cdr row)))))

(for-each (lambda (row) (pp! row))
          (p-triangle (read)))
