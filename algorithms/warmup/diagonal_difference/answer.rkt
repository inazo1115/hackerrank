#lang racket

; util
(define vr vector-ref)

(define-syntax at
  (syntax-rules ()
    ((_ xss x y)
     (vr (vr xss y) x))))

(define (range n m)
  (if (< n m)
      (cons n (range (+ n 1) m))
      '()))

(define (zip l0 l1)
  (map cons l0 l1))

; solve
(define (preprocess)
  (define N (string->number (read-line)))
  (define xss (make-xss N))
  (vector N xss))

(define (make-xss _n)
  (define (f n)
    (if (eq? n 0)
        '()
        (cons (list->vector (map (lambda (x) (string->number x))
                                 (string-split (read-line) " ")))
              (f (- n 1)))))
  (list->vector (f _n)))

(define (solve N xss)
  (let* ([r (range 0 N)]
         [zip0 (zip r r)]
         [zip1 (zip r (reverse r))])
    (abs (- (my-sum xss zip0)
            (my-sum xss zip1)))))

(define (my-sum xss zip_)
  (foldr + 0 (map (lambda (x) (at xss (car x) (cdr x)))
                  zip_)))

; main
(define v (preprocess))
(display (solve (vr v 0) (vr v 1)))

