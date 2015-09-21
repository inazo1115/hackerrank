#lang racket

(define (solve N th score candy sum dec)
  (let ([score* (read)])
    (cond [(eqv? th N) sum]
          [(> score* score)
           (solve N (add1 th) score* (add1 candy) (+ sum (add1 candy)) 0)]
          [(and (< score* score) (eqv? candy 1))
           (solve N (add1 th) score* 1 (+ sum dec 1) (add1 dec))]
          [(< score* score)
           (solve N (add1 th) score* 1 (add1 sum) (add1 dec))]
          [(eqv? score* score)
           (solve N (add1 th) score* 1 (add1 sum) 0)]
          [else (error 'failed)])))

(solve (read) 0 0 0 0 0)
