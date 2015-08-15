#lang racket

(define i 0)
(define q 0)

(define (insert-sort lis sorted)
  (if (null? lis)
      sorted
      (insert-sort (cdr lis)
                   (insert (car lis) sorted))))

(define (insert x sorted)
  (if (or (null? sorted) (<= x (car sorted)))
      (cons x sorted)
      (cons (car sorted) (insert x (cdr sorted)))))

(define (quick-sort lis)
  (if (null? lis)
      '()
      (append (quick-sort (filter (lambda (e) (<= e (car lis))) (cdr lis)))
              (list (car lis))
              (quick-sort (filter (lambda (e) (> e (car lis))) (cdr lis))))))

(define n (string->number (read-line)))
(define l (map string->number (string-split (read-line) " ")))

(insert-sort l '())
;(displayln i)

(quick-sort l)
;(displayln q)

;(- i q)
