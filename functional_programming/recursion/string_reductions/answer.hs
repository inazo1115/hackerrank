import Data.Set

solve :: String -> Set Char -> String -> (String, Set Char, String)
solve "" set acc = ("", set, reverse acc)
solve (c:cx) set acc
    | member c set = solve cx set acc
    | otherwise    = solve cx (insert c set) (c:acc)

main :: IO()
main = do s <- getLine
          let (_, _, acc) = solve s empty ""
          putStrLn acc
