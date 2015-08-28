#lang racket

(define p displayln)

; global


; list[char] -> list[string]
(define (substrings cs)
  (map list->string
       (foldr (lambda (l r) (append r
                                    (map (lambda (e) (cons l e))
                                         r)))
              '(())
              cs)))


; string -> null
(define (set-al-vec! s)
  (for-each (lambda (c) (vector-set! al
                                     (- (char->integer c) 97)
                                     (add1 (vector-ref al (- (char->integer c) 97)))))
            (string->list s)))

(define (helper c n lst)
  (if (zero? n)
      lst
      (cons c (helper c (sub1 n) lst))))

(define (get-char-list vec)
  (foldr (lambda (l r) (if (zero? (car l))
                           r
                           (helper (integer->char (+ (cdr l) 97)) (car l) r)))
         '()
         (map (lambda (a b) (cons a b))
              (vector->list vec)
              (range (vector-length vec)))))

(define al (make-vector 26))
(define n (string->number (read-line)))
(for-each (lambda (e) (set-al-vec! (read-line)))
          (range n))
(define substr* (cdr (sort (substrings (get-char-list al)) string<?)))

substr*

(define k (string->number (read-line)))
(for-each (lambda (_) (let ([q (string->number (read-line))]
                            [len (length substr*)])
                        (p (if (> q len)
                               "INVALID"
                               (list-ref substr* (sub1 q))))))
          (range k))
