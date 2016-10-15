import Text.Printf

solve :: String -> String -> String -> (String, String, String)
solve [] y acc = ([], y, reverse acc)
solve x [] acc = (x, [], reverse acc)
solve x_@(x:xs) y_@(y:ys) acc
    | x == y    = solve xs ys (x:acc)
    | otherwise = (x_, y_, reverse acc)

print' :: String -> IO()
print' x = printf "%d %s\n" (length x) x

main :: IO()
main = do x <- getLine
          y <- getLine
          let (x', y', prefix) = solve x y ""
          print' prefix
          print' x'
          print' y'
