;; require
(require '[clojure.data :as dat]
         '[clojure.string :as str])

;; read
(defn read-line-lst [] (map read-string (str/split (read-line) #" ")))
(defn read-word-lst ([n] (if (zero? n) '()
                             (cons (read) (read-word-lst (dec n))))))

;; solve
(def m-solve
  (memoize (fn [size]
             (mod (if (= size 0) 1
                      (reduce + (map #(* (m-solve %) (m-solve (- size % 1)))
                                     (range size))))
                  (+ 100000000 7)))))

;; main
(def T (int (first (read-word-lst 1))))
(doseq [N (map int (read-word-lst T))]
  (println (m-solve N)))
