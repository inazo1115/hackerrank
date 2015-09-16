#lang racket

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

(void (read-line))
(define xs (filter positive?
                   (map string->number
                        (string-split (read-line) " "))))

;(solve xs)
(map prime-fact
     (range 2 100))
