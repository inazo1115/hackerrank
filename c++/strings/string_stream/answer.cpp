#include <sstream>
#include <string>
#include <vector>
#include <iostream>
using namespace std;

vector<int> parseInts(string str) {
  vector<int> ret;
  stringstream ss(str);
  string token;
  while(getline(ss, token, ',')) {
    ret.push_back(stoi(token));
  }
  return ret;
}

int main() {
  string str;
  cin >> str;
  vector<int> integers = parseInts(str);
  for(int i = 0; i < integers.size(); i++) {
    cout << integers[i] << "\n";
  }

  return 0;
}
