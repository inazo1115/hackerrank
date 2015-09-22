#lang racket

(define N (string->number (read-line)))
(define m-x (floor (/ N 2)))
(define m-y (floor (/ N 2)))
(define p-x null)
(define p-y null)

(let ([_first (string->list (read-line))])
  (for-each (lambda (e) (read-line))
            (range (- N 2)))
  (let ([_last (string->list (read-line))])
    (cond [(equal? (car _first) #\p) (set! p-x 0) (set! p-y 0)]
          [(equal? (car (reverse _first)) #\p) (set! p-x (sub1 N)) (set! p-y 0)]
          [(equal? (car _last) #\p) (set! p-x 0) (set! p-y (sub1 N))]
          [else (set! p-x (sub1 N)) (set! p-y (sub1 N))])))

(for-each (lambda (e) (displayln (if (> p-y m-y) "DOWN" "UP")))
          (range (abs (- p-y m-y))))
(for-each (lambda (e) (displayln (if (> p-x m-x) "RIGHT" "LEFT")))
          (range (abs (- p-x m-x))))
