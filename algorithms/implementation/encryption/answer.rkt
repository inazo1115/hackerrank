#lang racket/base

; solve :: string -> string
(define (solve str)
  (let* ([len    (string-length str)]
         [rows   (inexact->exact (floor   (sqrt len)))]  ; -> 3
         [cloumn (inexact->exact (ceiling (sqrt len)))]) ; -> 4
    (mk-str str len rows cloumn)))

; mk-str :: string -> number -> number -> number -> string
(define (mk-str str len rows cloumn)
  (let ([ret ""])
    (for-each (lambda (x)
                (for-each (lambda (y) (set! ret (string-append ret (string (string-ref str y)))))
                          (range x len cloumn))
                (set! ret (string-append ret  " ")))
              (range 0 cloumn 1))
    ret))

; range :: number -> number -> list[number]
(define (range n m add)
  (if (>= n m)
      '()
      (cons n (range (+ n add) m add))))

; main
(define S (read-line))
(displayln (solve S))
