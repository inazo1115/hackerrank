#lang racket

(define p displayln)

(define *hash* (make-hash))

(define (solve n)
  (if (hash-has-key? *hash* n)
      (hash-ref *hash* n)
      (let ([ans (if (eqv? n 1)
                     1
                     (+ (+ 4
                           (* 3
                              (- n 2)))
                        (solve (sub1 n))))])
        (hash-set! *hash* n ans)
        ans)))

;; main
(define T (read))
(for-each (lambda (_) (p (solve (read))))
          (range T))
