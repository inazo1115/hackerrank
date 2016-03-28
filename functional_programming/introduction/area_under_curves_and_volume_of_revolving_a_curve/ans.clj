;;;

(defn pow [n x]
  (cond (< x 0) (pow (/ 1 n) (- x))
        (== x 0) 1
        :else (reduce * (take x (cycle [n])))))

(defn make-func [xs ys]
  (fn [z]
    (reduce (fn [a foo] (+ a
                           (* (first foo)
                              (pow z (second foo)))))
            0
            (map list xs ys))))

;; main
(def xs (map read-string (.split (read-line) " ")))
(def ys (map read-string (.split (read-line) " ")))
(def from (read))
(def to (read))

;; 1
(def f (make-func xs ys))
(def ans1 (reduce (fn [a x] (+ a (* 0.001
                                    (f x))))
                  0
                  (range from to 0.001)))
(println ans1)

;; 2
(def ans2 (reduce (fn [a x] (+ a
                               (* 0.001
                                  (* Math/PI
                                     (pow (f x) 2)))))
                  0
                  (range from to 0.001)))
(println ans2)
