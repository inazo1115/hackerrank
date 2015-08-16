#lang racket

(struct point (x y) #:prefab)

; (number, number, vector[vector[string]], point, point) -> number
(define (solve n m f now gorl)
  (vector-set! (vector-ref f (point-x now)) (point-y now) "X")
  
  )

; (number, number, vector[vector[string]], string) -> point
(define (find n m f word)
  (define ret (point 0 0))
  (for ([i n])
    (for ([j m])
      (when (equal? (vector-ref (vector-ref f i) j) word)
        (set! ret (point i j)))))
  ret
  )

(define (process)
  (define _line (map string->number (string-split (read-line) " ")))
  (define N (first _line))
  (define M (second _line))
  (define f (make-vector N))
  (for-each (lambda (j) (vector-set! f j (list->vector (map string
                                                            (string->list (read-line))))))
            (range N))
  (define K (string->number (read-line)))
  (define start (find N M f "M"))
  (define end (find N M f "*"))
  (displayln (if (eqv? (solve N M f start end) K)
                 "Impressed"
                 "Oops!")))

(define T (string->number (read-line)))
(for-each (lambda (_) (process))
          (range T))
