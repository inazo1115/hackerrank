import Control.Applicative
import Data.List

main :: IO()
main = do _ <- getLine
          xs <- map (read::String->Int) . words <$> getLine
          print . sum . map (\xs -> div (length xs) 2) . groupBy (==) . sort $ xs
