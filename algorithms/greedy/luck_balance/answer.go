package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

var sc = bufio.NewScanner(os.Stdin)

type Contest struct {
	L int
	T int
}

type Contests []Contest

func (f Contests) Len() int {
	return len(f)
}

func (f Contests) Swap(i, j int) {
	f[i], f[j] = f[j], f[i]
}

func (f Contests) Less(i, j int) bool {
	return f[i].L > f[j].L
}

func nextLine() (int, int) {
	sc.Scan()
	tmp := strings.Split(sc.Text(), " ")
	x0, _ := strconv.Atoi(tmp[0])
	x1, _ := strconv.Atoi(tmp[1])
	return x0, x1
}

func main() {
	n, k := nextLine()
	cs := make(Contests, n)
	for i := 0; i < n; i++ {
		l, t := nextLine()
		cs[i] = Contest{l, t}
	}

	sort.Sort(cs)

	ans := 0
	for _, e := range cs {
		switch {
		case e.T == 0:
			ans += e.L
		case e.T == 1 && k > 0:
			ans += e.L
			k -= 1
		default:
			ans -= e.L
		}
	}
	fmt.Println(ans)
}
