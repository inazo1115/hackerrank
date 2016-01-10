#include <iostream>
using namespace std;

int T, N, M, S;
int cost[1001][1001];
int d[1001];
bool used[1001];
int INF = 100000;

void dijkstra(int s) {
  fill(d, d + N, INF);
  fill(used, used + N, false);
  d[s] = 0;
  while(true) {
    int v = -1;
    for(int u = 0; u < N; u++) {
      if(!used[u] && (v == -1 || d[u] < d[v])) v = u;
    }
    if(v == -1) break;
    used[v] = true;
    for(int u = 0; u < N; u++) {
      d[u] = min(d[u], d[v] + cost[v][u]);
    }
  }
}

void solve() {
  scanf("%d %d", &N, &M);
  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      cost[i][j] = INF;
    }
  }
  for(int i = 0; i < M; i++) {
    int u, v;
    scanf("%d %d", &u, &v);
    u += -1;
    v += -1;
    cost[u][v] = 6;
    cost[v][u] = 6;
  }
  scanf("%d", &S);
  S += -1;
  dijkstra(S);
  for(int i = 0; i < N; i++) {
    if(i == S) continue;
    if(d[i] == INF) d[i] = -1;
    printf("%d ", d[i]);
  }
  printf("\n");
}

int main() {
  scanf("%d", &T);
  for(int i = 0; i < T; i++) solve();
  return 0;
}
