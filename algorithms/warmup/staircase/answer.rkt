#lang racket

; solve
(define (solve N)
  (for ([i (range 0 N)])
    (print-oneline N i)))

(define (print-oneline N i)
  (display (make-string (- N i 1) #\ ))
  (display (make-string (+ i 1) #\#))
  (newline))

(define (range n m)
  (if (eqv? n m)
      '()
      (cons n (range (+ n 1) m))))

; main
(define N (read))
(solve N)

