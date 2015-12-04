#include <iostream>
#include <string>
using namespace std;

int main() {
  // Complete the program

  string a, b;
  cin >> a >> b;
  
  string c = a + b;

  printf("%lu %lu\n", a.size(), b.size());
  cout << c << endl;
  
  char tmp = b[0];
  b[0] = a[0];
  a[0] = tmp;

  cout << a << " " << b << endl;

  return 0;
}

