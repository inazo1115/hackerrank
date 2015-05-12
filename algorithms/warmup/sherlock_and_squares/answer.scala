import scala.math._

object Solution {

  def main(args: Array[String]) {
    val sc = new java.util.Scanner(System.in)
    val T  = sc.nextInt

    for(_ <- 0 until T) {
      val A = sc.nextInt
      val B = sc.nextInt

      val A_ = floor(sqrt(A)).toInt
      val B_ = ceil(sqrt(B)).toInt
      println((A_ to B_).map(x => pow(x, 2)).filter(x => A <= x && x <= B).length)
    }
  }
}

