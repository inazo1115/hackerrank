#lang racket

(define (sierpinski! n canvas tx ty height)
  (if (zero? n)
      (draw-triangle! canvas tx ty height #\1)
      (for-each (lambda (e) (sierpinski! (sub1 n) canvas (car e) (cadr e) (caddr e)))
                (get-next tx ty height))))

(define (get-next tx ty height)
  (let*([h (/ height 2)]
        [x (+ tx h)])
    (list (list tx ty h)
          (list x (- ty h) h)
          (list x (+ ty h) h))))

(define (draw-triangle! canvas tx ty height c)
  (for* ([i (range tx (+ tx height))]
         [j (range (- ty (- i tx))
                   (add1 (+ ty (- i tx))))])
    (vector-set! (vector-ref canvas i) j c)))

(define (pp-canvas canvas)
  (for-each displayln
            (map (lambda (e) (list->string (vector->list e)))
                 (vector->list canvas))))

;; main
(define *canvas* (for/vector ([x 32])
                   (for/vector ([y 63])
                     #\_)))
(sierpinski! (read) *canvas* 0 31 32)
(pp-canvas *canvas*)
