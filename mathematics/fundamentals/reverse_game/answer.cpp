#include <iostream>
#include <math.h>

using namespace std;

int solve(int n, int k) {
  if(k < floor(n / 2)) {
    return k * 2 + 1;
  } else if(n % 2 == 1) {
    return (n - 1) - ((k - floor(n / 2)) * 2);
  } else {
    return (n - 1) - ((k - floor(n / 2)) * 2 + 1);
  }
}

int main() {
  int t, n, k;
  cin >> t;
  for(int i = 0; i < t; i++) {
    cin >> n >> k;
    cout << solve(n, k) << endl;
  }
}
