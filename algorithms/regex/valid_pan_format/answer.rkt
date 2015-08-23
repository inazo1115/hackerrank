#lang racket

(define (true? p)
  (not (false? p)))

(define (solve char-lst)
  (and (eqv? (length char-lst) 10)
       (andmap true?
               (map (lambda (e i) (pred e i))
                    char-lst
                    (range (length char-lst))))))

(define (pred e i)
  (cond [(< i 5) (a? e)]
        [(< i 9) (b? e)]
        [else (a? e)]))

(define (a? e)
  (char-upper-case? e))

(define (b? e)
  (char-numeric? e))

(define N (string->number (read-line)))
(for-each (lambda (_) (displayln (if (solve (string->list (read-line)))
                                     "YES"
                                     "NO")))
          (range N))

