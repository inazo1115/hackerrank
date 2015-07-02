#lang racket

; solve :: number -> string -> number -> string
(define (solve N S K)
  (list->string
   (map (lambda (c) (encode c K))
        (string->list S)))
  )

; encode :: char -> number -> char
(define (encode c n)
  (if (char-alphabetic? c)
      (slide c n)
      c
      ))

; slide :: char -> number -> char
(define (slide c n)
  (let* ([num-a          (char->integer #\a)]
         [num-downcase-c (char->integer (char-downcase c))]
         [c1             (integer->char (+ (remainder (+ (- num-downcase-c num-a) n) 26) num-a))])
    (if (char-lower-case? c)
        c1
        (char-upcase c1)
        )))

; main
(define N (string->number (read-line)))
(define S (read-line))
(define K (string->number (read-line)))
(displayln (solve N S K))

