(defn solve [_seq]
  (if (empty? _seq)
    '()
    (cons (second _seq)
          (cons (first _seq)
                (solve (rest (rest _seq)))))))

;; main
(doseq [i (range (read))] (println (apply str (solve (seq (str (read)))))))
