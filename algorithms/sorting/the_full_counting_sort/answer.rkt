#lang racket

(define size (string->number (read-line)))
(define vec (make-vector 100))
(vector-fill! vec '())

(define (process-line! i)
  (let* ([line (string-split (read-line) " ")]
         [num (string->number (car line))]
         [wor (if (< i (/ size 2)) "-" (car (cdr line)))])
    (vector-set! vec num (cons wor (vector-ref vec num)))))

(for-each (lambda (i) (process-line! i))
          (range size))

(define (_display! e)
  (unless (null? e)
    (begin (display (string-join (reverse e) " "))
           (display " "))))

(void (vector-map (lambda (e) (_display! e))
                  vec))
