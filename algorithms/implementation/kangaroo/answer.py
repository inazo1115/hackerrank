#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys


def solve(x1, v1, x2, v2, step):
    if (x1 == x2):
        return 'YES'
    elif (x1 > x2):
        if (step == 1):
            return 'NO'
        else:
            return solve(x1 - v1 * step, v1, x2 - v2 * step, v2, int(step / 2))
    else:
        return solve(x1 + v1 * step, v1, x2 + v2 * step, v2, step)

if __name__ == '__main__':
    xs = [int(s) for s in sys.stdin.readline().split(' ')]
    x1, v1, x2, v2 = xs[0], xs[1], xs[2], xs[3]
    if (v1 <= v2):
        print('NO')
    else:
        print(solve(x1, v1, x2, v2, 100))
