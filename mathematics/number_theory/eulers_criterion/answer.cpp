#include <iostream>

using namespace std;

// euler's criterion
int solve(int a, int m) {
  for(int i = 1; i < m; i++) {
    int x = (i * i) % m;
    if(x == a) {
      return 1;
    }
  }
  return 0;
}

int main() {
  int t, a, m;
  cin >> t;
  for(int i = 0; i < t; i++) {
    cin >> a >> m;
    cout << (solve(a, m) ? "YES" : "NO") << endl;
  }
}
