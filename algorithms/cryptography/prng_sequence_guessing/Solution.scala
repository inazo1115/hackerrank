object Solution {
  def main(args: Array[String]) {
    val sc = new java.util.Scanner(System.in)
    val n = sc.nextInt()
    for(i <- 0 until n) {
      val a, b = sc.nextInt()
      val arr = Array.fill(10)(sc.nextInt())
      solve(a, b, arr)
    }
  }
  def solve(a: Int, b: Int, arr: Array[Int]) = {
    (a to b).foreach{ seed =>
      val rand = new java.util.Random(seed)
      val arr2 = Array.fill(10)(rand.nextInt(1000))
      var is = true
      for(i <- 0 to 9) {
        is = is && (arr(i) == arr2(i))
      }
      if(is) {
        print(seed)
        for(i <- 0 to 9) {
          print(" " + rand.nextInt(1000))
        }
        println("")
      }
    }
  }
}

