;; require
(require '[clojure.data :as -dat]
         '[clojure.string :as -str])

;; read
(defn -read-line [] (map read-string (-str/split (read-line) #" ")))
(defn -read-word
  ([] (read))
  ([n] (if (zero? n) '()
           (cons (read) (-read-word (dec n))))))

;; solve
(defn solve [] "Write your answer here.")

;; main
(println (solve))
