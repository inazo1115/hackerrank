#include <iostream>

using namespace std;

int gcd(int x, int y) {
  int rem = x % y;
  if(rem == 0) {
    return y;
  } else {
    return gcd(y, rem);
  }
}

int solve(int l, int b) {
  int _gcd = gcd(max(l, b), min(l, b));
  return (l / _gcd) * (b / _gcd);
}

int main() {
  int t, l, b;
  cin >> t;
  for(int i = 0; i < t; i++) {
    cin >> l >> b;
    cout << solve(l, b) << endl;
  }
  return 0;
}
