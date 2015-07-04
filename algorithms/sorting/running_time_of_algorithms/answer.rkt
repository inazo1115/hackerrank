#lang racket

; solve
; [number] -> number -> [number]
(define (insert xs x)
  (if (or (null? xs) (<= x (car xs)))
      (cons x xs)
      (begin
        (set! times (+ times 1))
        (cons (car xs) (insert (cdr xs) x))
        )
      ))

; [number] -> [number] -> [number]
(define (insertion-sort sorted xs)
  (if (null? xs)
      sorted
      (insertion-sort (insert sorted (car xs)) (cdr xs))
      ))

; main
(define N (string->number (read-line)))
(define xs (map (lambda (x) (string->number x))
                (string-split (read-line) " ")))
(define times 0)

(displayln (begin
             (insertion-sort '() (reverse xs))
             times))

