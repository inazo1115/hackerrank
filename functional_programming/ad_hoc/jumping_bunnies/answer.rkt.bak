#lang racket

(define (solve xs)
  (if (null? xs)
      '()
      (cons (car xs) (solve (my-filter (car xs) (cdr xs))))))

;(2 3) ((2 2) (5 7))
(define (my-filter x xs)
  (map (lambda (y) (bar x y))
       xs))

;(2 3) (2 2) -> (2), (5 7) (2 2) -> (2 2)
(define (bar x y)
  (cond [(null? x) y]
        [(null? y) '()]
        [(eqv? (car x) (car y)) (bar (cdr x) (cdr y))]
        [else (bar (cdr x) y)]))

; number -> list[number]
(define (prime-fact x)
  (define (helper n primes)
    (cond [(eqv? n 1) '()]
          [(zero? (modulo n (car primes)))
           (cons (car primes) (helper (quotient n (car primes)) primes))]
          [else (helper n (cdr primes))]))
  (helper x (sieve x)))

; number -> list[number]
(define (sieve x)
  (define (helper xs)
    (if (null? xs)
        '()
        (cons (car xs) (helper (filter (lambda (e) (positive? (modulo e (car xs))))
                                       xs)))))
  (helper (range 2 (add1 x))))

; main
(void (read-line))
(define xs (filter positive?
                   (map string->number
                        (string-split (read-line) " "))))
(apply * (flatten (solve (map prime-fact xs))))
