#include <stdio.h>
#include <cstdlib>
#include <iostream>

void update(int *a,int *b) {
  // Complete this function
  int tmp_a = *a;
  int tmp_b = *b;
  *a = tmp_a + tmp_b;
  *b = abs(tmp_a - tmp_b);
}

int main() {
  int a, b;
  int *pa = &a, *pb = &b;

  scanf("%d %d", &a, &b);
  update(pa, pb);
  printf("%d\n%d", a, b);

  return 0;
}
