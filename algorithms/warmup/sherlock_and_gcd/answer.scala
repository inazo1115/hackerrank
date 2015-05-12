import scala.util.control.Breaks

object Solution {

  val b = new Breaks

  def main(args: Array[String]) {
    val sc = new java.util.Scanner(System.in)
    val T  = sc.nextInt
    for(_ <- 0 until T) {
      val N       = sc.nextInt
      val list    = List.fill(N)(sc.nextInt)
      val set     = list.toSet

      b.breakable {
        if(list.length != set.size) {
          println("NO")
          b.break
        }
        if(list.exists(_ == 1)) {
          println("YES")
          b.break
        }
        val subsets = set.subsets.filterNot(_.isEmpty)
        for(s <- subsets) {
          for(e <- s) {
            if(s.filter(_ % e == 0).size == s.size) {
              println("NO")
              b.break
            }
          }
          println("YES")
        }
      }
    }
  }
}

