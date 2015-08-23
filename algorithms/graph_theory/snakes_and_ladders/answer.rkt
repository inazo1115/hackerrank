#lang racket

(define p displayln)

(define (play move-lst snakes)
  (define f (make-vector 130))
  (vector-fill! f 100)
  (vector-set! f 1 0)
  (for-each (lambda (_) (for-each (lambda (now-pos) (step f now-pos move-lst))
                                  (range 1 100)))
            (range (length snakes)))
  (if (eqv? (vector-ref f 100) 100)
      -1
      (vector-ref f 100)))

(define (step f now-pos move-lst)
  (for-each (lambda (dice) (let ([next-pos (get-next-pos (+ now-pos dice) move-lst)]
                                 [next-val (add1 (vector-ref f now-pos))])
                             (when (< next-val (vector-ref f next-pos))
                               (vector-set! f next-pos next-val))
                             (when (< next-pos now-pos)
                               (step f next-pos move-lst))))
            (range 1 7)))

(define (get-next-pos next-pos move-lst)
  (define move (free-move next-pos move-lst))
  (if (null? move)
      next-pos
      move))

(define (free-move pos move-lst)
  (let ([move (filter (lambda (m) (eqv? (car m) pos))
                      move-lst)])
    (if (null? move)
        null
        (cadr (car move)))))

(define (read-n n)
  (if (eqv? n 0)
      '()
      (cons (map string->number
                 (string-split (read-line) " "))
            (read-n (sub1 n)))))

;; main
(define T (string->number (read-line)))
(define (process)
  (let* ([N (string->number (read-line))]
         [ladders (read-n N)]
         [M (string->number (read-line))]
         [snakes (read-n M)])
    (play (append ladders snakes) snakes)))
(for-each (lambda (_)
            (p (process)))
          (range T))
