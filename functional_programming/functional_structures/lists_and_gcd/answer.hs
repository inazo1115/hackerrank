import Control.Monad
import Data.Functor
import Data.List
import qualified Data.Map as Map

toMap :: Map.Map Int Int -> [Int] -> Map.Map Int Int
toMap m (x:y:xs) = toMap (Map.insert x y m) xs
toMap m [] = m

solve :: Map.Map Int Int -> [Map.Map Int Int] -> Map.Map Int Int
solve m (m':ms) = solve (f m m') ms
    where f = Map.intersectionWith (\a b -> min a b)
solve m [] = m

flatten :: [(Int, Int)] -> [Int]
flatten ((x,y):xs) = x:y:(flatten xs)
flatten [] = []

main :: IO()
main = do
  q <- (read :: String -> Int) <$> getLine
  ms <- forM [1..q] $ \i -> do
          xs <- map (read :: String -> Int) . words <$> getLine
          return $ toMap Map.empty xs
  let ans = solve (head ms) (tail ms)
  putStrLn . format $ ans
      where format = intercalate " " . map show . flatten . Map.toList
