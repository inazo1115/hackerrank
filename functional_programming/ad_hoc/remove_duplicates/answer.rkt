#lang racket

(displayln (list->string (remove-duplicates (string->list (read-line)))))
