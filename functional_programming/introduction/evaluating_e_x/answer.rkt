#lang racket

(define p displayln)

(define (solve x)
  (apply + (map (lambda (e) (/ (power x e) (factorial e)))
                (range 10))))

(define (factorial n)
  (if (zero? n)
      1
      (* n (factorial (sub1 n)))))

(define (power x n)
  (if (zero? n)
      1
      (* x (power x (sub1 n)))))

(define N (string->number (read-line)))
(for-each (lambda (i) (p (solve (string->number (read-line)))))
          (range N))
