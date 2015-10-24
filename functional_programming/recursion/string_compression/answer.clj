(ns answer)

(defn split* [x xs]
  (cond (empty? xs) (list '() '())
        (not (= (first xs) x)) (list '() xs)
        :else (list (cons (first xs)
                          (first (split* x (rest xs))))
                    (nth (split* x (rest xs)) 1))))

(defn group* [lst]
  (if (empty? lst) '()
      (let [a (first (split* (first lst) lst))
            b (nth (split* (first lst) lst) 1)]
        (cons a (group* b)))))

(defn solve [lst]
  (map (fn [lst] (list (first lst) (count lst)))
       (group* lst)))

; main
(def msg (seq (read-line)))
(doseq [x (solve msg)]
  (print (if (== (nth x 1) 1) (first x)
             (str (first x)
                  (nth x 1)))))
