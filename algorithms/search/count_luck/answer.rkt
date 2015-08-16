#lang racket

(struct point (x y) #:prefab)

(define (get f x y)
  (vector-ref (vector-ref f x) y)
  )

; (number, number, vector[vector[string]], point, point) -> number
(define (solve n m f now gorl k val)
  
  (when (equal? (get f (point-x now) (point-y now)) "*")
    (displayln (if (eqv? k val)
                   "Impressed"
                   "Oops!"
                   )))

  (vector-set! (vector-ref f (point-x now)) (point-y now) "X")
  ; up
  (define up? (and (>= (sub1 (point-x now)) 0)
                   (not (equal? (get f (sub1 (point-x now)) (point-y now)) "X"))
                   ))
  ; right
  (define right? (and (< (add1 (point-y now)) m)
                      (not (equal? (get f (point-x now) (add1 (point-y now))) "X"))
                      ))
  ; down
  (define down? (and (< (add1 (point-x now)) n)
                     (not (equal? (get f (add1 (point-x now)) (point-y now)) "X"))
                     ))
  ; left
  (define left? (and (>= (sub1 (point-y now)) 0)
                     (not (equal? (get f (point-x now) (sub1 (point-y now))) "X"))
                     ))

  (define num (length (filter (lambda (p) p)
                              (list up? right? down? left?))
                      ))
  (when (> num 1)
    (set! val (add1 val))
    )

  (when up?    (solve n m f (point (sub1 (point-x now)) (point-y now)) gorl k val))
  (when right? (solve n m f (point (point-x now) (add1 (point-y now))) gorl k val))
  (when down?  (solve n m f (point (add1 (point-x now)) (point-y now)) gorl k val))
  (when left?  (solve n m f (point (point-x now) (sub1 (point-y now))) gorl k val))

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
  (solve N M f start end K 0)
  )

(define T (string->number (read-line)))
(for-each (lambda (_) (process))
          (range T))
