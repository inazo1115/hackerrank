object Solution {
  def main(args: Array[String]) {
    val sc = new java.util.Scanner(System.in)
    val T  = sc.nextInt
    for(_ <- 0 until T) {
      val N    = sc.nextInt
      val list = List.fill(N)(sc.nextInt)
      println(list)
    }
  }
}

