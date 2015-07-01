#lang racket

; solve
(define (solve time-str)
  (if (eqv? (string-length time-str) 8)
      time-str
      (solve* time-str)))

(define (solve* time-str)
  (let ([hh (substring time-str 0 2)]
        [mm (substring time-str 3 5)]
        [ss (substring time-str 6 8)]
        [xx (substring time-str 8 10)])
    (string-append 
     (get-24-hour-format-time hh xx) ":" mm ":" ss)))

(define (get-24-hour-format-time h x)
  (let ([nh (string->number h)])
    (let* ([nh* (if (< nh 12) nh (- nh 12))]
           [nh** (if (string=? x "AM") nh* (+ 12 nh*))])
      (format-24-h nh**)
      )))

(define (format-24-h h)
  (~r (remainder h 24)
      #:min-width 2 #:pad-string "0"))

; main
(displayln (solve (read-line)))

