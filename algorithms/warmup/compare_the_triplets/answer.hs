readInts :: String -> [Int]
readInts = map (read:: String -> Int) . words

compare' :: (Int, Int) -> (Int, Int)
compare' (x, y)
    | x > y     = (1, 0)
    | x == y    = (0, 0)
    | otherwise = (0, 1)

agg :: (Int, Int) -> (Int, Int) -> (Int, Int)
agg (x, y) (a, b) = (x + a, y + b)

format :: (Int, Int) -> String
format (x, y) = show x ++ " " ++ show y

main = do
  line <- getLine
  let alice = readInts line
  line <- getLine
  let bob = readInts line
  let result = foldl agg (0, 0) $ map compare' $ zip alice bob
  putStrLn . format $ result
