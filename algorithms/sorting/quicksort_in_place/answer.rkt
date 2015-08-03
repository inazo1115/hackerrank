#lang racket

(define (qsort vec start end)
  (let ([pivotv (vector-ref vec end)]
        [i start])
    (for-each (lambda (j)
                (let ([x (vector-ref vec j)])
                  (when (< x pivotv)
                    (swap vec i j)
                    (set! i (add1 i)))
                  ))
              (range start (add1 end)))
    (when (<= i end)
      (swap vec i end)
      (p vec) ; print here
      (let ([pre  (sub1 i)]
            [post (add1 i)])
        (when (< start pre)
          (qsort vec start pre))
        (when (< post end)
          (qsort vec post end))
        ))
    ))

(define (p vec)
  (displayln (string-join (map (lambda (x) (number->string x)) (vector->list vec)))))

(define (swap vec i j)
  (let ([xi (vector-ref vec i)]
        [xj (vector-ref vec j)])
    (vector-set! vec i xj)
    (vector-set! vec j xi)
    vec))

(define (range n m)
  (if (>= n m)
      '()
      (cons n (range (add1 n) m))))

; main
(define n (string->number (read-line)))
(define ar (map (lambda (e) (string->number e))
                (string-split (read-line) " ")))
(define vec (list->vector ar)) ; return mutable vector
(qsort vec 0 (sub1 (vector-length vec)))
