#!/usr/bin/env python
# -*- coding: utf-8 -*-

import functools

def memo(size):
    if size == 0:
        return 1
    return functools.reduce(lambda x, y: x + y, [memo(i) * memo(size - i - 1) for i in range(size)])

if __name__ == '__main__':
    print(memo(4))
