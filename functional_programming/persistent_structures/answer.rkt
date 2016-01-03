#lang racket

(define (gcd x y)
  (let ([rem (remainder x y)])
    (if (eqv? rem 0)
        y
        (gcd y rem))))

(define (subarray l r arr)
  (cond [(< r 0) '()]
        [(> l 0) (subarray (sub1 l) (sub1 r) (cdr arr))]
        [else (cons (car arr) (subarray (sub1 l) (sub1 r) (cdr arr)))]))

(define (process-q l r arr)
  (displayln (foldr (lambda (v l) (/ (* v l) (gcd v l)))
                    1
                    (subarray l r arr)))
  arr)

(define (update-array idx val arr)
  (if (eqv? idx 0)
      (cons (* val (car arr)) (cdr arr))
      (cons (car arr) (update-array (sub1 idx) val (cdr arr)))))

(define (process-u idx val arr)
  (update-array idx val arr))

(define (process-query! k arr)
  (when (not (eqv? k 0))
    (let* ([query (string-split (read-line) " ")]
           [type (car query)]
           [param0 (string->number (cadr query))]
           [param1 (string->number (caddr query))])
      (process-query! (sub1 k)
                      (cond
                        [(equal? type "Q") (process-q param0 param1 arr)]
                        [(equal? type "U") (process-u param0 param1 arr)])))))

; main
(define N (string->number (read-line)))
(define A (map string->number
               (string-split (read-line) " ")))
(define K (string->number (read-line)))
(process-query! K A)
