object Solution {
  def main(args: Array[String]) {
    val sc = new java.util.Scanner(System.in)
    val T = sc.nextInt

    for(_ <- 0 until T) {
      val B = new BigInt(sc.nextBigInteger)
      val W = new BigInt(sc.nextBigInteger)
      val X = new BigInt(sc.nextBigInteger)
      val Y = new BigInt(sc.nextBigInteger)
      val Z = new BigInt(sc.nextBigInteger)
      println(B * X.min(Y + Z) + W * Y.min(X + Z))
    }
  }
}

