#lang racket


(define (group xs)
  (if (null? xs)
      '()
      (cons (cons (car xs)
                  (length (takef xs (lambda (e) (eqv? e (car xs))))))
            (group (dropf xs (lambda (e) (eqv? e (car xs))))))))

(void (read-line))
(define xs0 (map string->number
                 (string-split (read-line) " ")))
(void (read-line))
(define xs1 (map string->number
                 (string-split (read-line) " ")))

(define xs0* (group (sort xs0 <)))
(define xs1* (group (sort xs1 <)))

(map (lambda (e0 e1) (if (eqv? (cdr e0))
                         '()))
     xs0*
     xs1*)

xs0*
xs1*
