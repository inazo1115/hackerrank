#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

def ans(xs, k):
    ret = 0
    pt = 0
    for i in range(len(xs)):
        for j in range(pt, len(xs)):
            _k = xs[j] - xs[i]
            if _k < k:
                pt += 1
                continue
            elif _k == k:
                pt += 1
                ret += 1
                break
            elif _k > k:
                break
    return ret

if __name__ == '__main__':
    l = sys.stdin.readline().split(' ')
    N = int(l[0])
    K = int(l[1])
    xs = [int(c) for c in sys.stdin.readline().split(' ')]
    xs.sort()
    print(ans(xs, K))
