#lang racket

(struct v (diff x y) #:prefab)

(void (read-line))
(define lis0 (sort (map string->number (string-split (read-line) " ")) <))
(define lis1 (map (lambda (x y) (v (- y x) x y))
                  (take lis0 (sub1 (length lis0)))
                  (cdr lis0)))
(define lis2 (sort lis1 (lambda (l r) (< (v-diff l) (v-diff r)))))
(define lis3 (filter (lambda (e) (eq? (v-diff e)
                                      (v-diff (car lis2))))
                     lis2))
(for-each (lambda (e) (display (v-x e))
                  (display " ")
                  (display (v-y e))
                  (display " "))
          lis3)
