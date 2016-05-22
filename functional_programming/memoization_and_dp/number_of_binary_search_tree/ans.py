#!/usr/bin/env python
# -*- coding: utf-8 -*-

import functools

cache = {0: 1}

def solve(size):
    if size in cache:
        return cache[size]
    ret = functools.reduce(lambda x, y: x + y, [solve(i) * solve(size - i - 1) for i in range(size)])
    cache[size] = ret
    return ret

def naive(size):
    if size == 0:
        return 1
    return functools.reduce(lambda x, y: x + y, [naive(i) * naive(size - i - 1) for i in range(size)])

if __name__ == '__main__':
    print(solve(1)) # => 1
    print(naive(1)) # => 1
    print(solve(2)) # => 2
    print(naive(2)) # => 2
    print(solve(3)) # => 5
    print(naive(3)) # => 5
    print(solve(4)) # => 14
    print(naive(4)) # => 14
    print(solve(100)) # => 896519947090131496687170070074100632420837521538745909320
    print(cache)
#    print(naive(100))
