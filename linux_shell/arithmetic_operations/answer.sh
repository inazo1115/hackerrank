#!/bin/bash

read EXPR
ans=$(echo "scale=4; $EXPR" | bc -l)
printf "%.3f" $ans
