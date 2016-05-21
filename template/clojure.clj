;; require
(require '[clojure.data :as dat]
         '[clojure.string :as str])

;; read
(defn read-line-lst [] (map read-string (str/split (read-line) #" ")))
(defn read-word-lst ([n] (if (zero? n) '()
                             (cons (read) (read-word-lst (dec n))))))

;; solve
(defn solve [] "Write your answer here.")

;; main
(println (solve))
