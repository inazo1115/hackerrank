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
      (let ([pre  (sub1 i)]
            [post (add1 i)])
        (when (< start pre)
          (qsort vec start pre))
        (when (< post end)
          (qsort vec post end))
        ))
    ))

(define (swap vec i j)
  (set! times-q (add1 times-q))
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
(define times 0)
(define times-q 0)

(define N (string->number (read-line)))
(define xs (map (lambda (x) (string->number x))
                (string-split (read-line) " ")))

(void (insertion-sort '() (reverse xs)))

(define vec (list->vector xs)) ; return mutable vector
(qsort vec 0 (sub1 (vector-length vec)))

(displayln (- times times-q))
