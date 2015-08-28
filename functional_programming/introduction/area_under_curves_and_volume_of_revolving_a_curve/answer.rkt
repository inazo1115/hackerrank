#lang racket

(define p displayln)

(define (solve a-lst b-lst x)
  (apply + (map (lambda (a b) (* a (power x b)))
                a-lst
                b-lst)))

(define (power x n)
  (if (zero? n)
      1
      (* x (power x (sub1 n)))))

(define (read-line*)
  (map string->number
       (string-split (read-line) " ")))

(define a-lst (read-line*))
(define b-lst (read-line*))
(define x* (read-line*))

(define area (* 0.001 (apply + (map (lambda (x) (solve a-lst b-lst x))
                                    (range (car x*) (cadr x*) 0.001)))))

(define volume (* 0.001 (apply + (map (lambda (x) (* pi (power (solve a-lst b-lst x) 2)))
                                      (range (car x*) (cadr x*) 0.001)))))

(p area)
(p volume)
