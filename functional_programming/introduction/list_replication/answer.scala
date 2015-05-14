
object Solution {

  def main(args: Array[String]) {
    val ans = f(2, List(1,2,3,4,5,6,7,8,9,10))
    ans.foreach(println)
  }

  def f(num: Int, arr: List[Int]): List[Int] = 
    arr.foldRight(List(): List[Int])((l, r) => List.fill(num)(l) ++ r)
}

