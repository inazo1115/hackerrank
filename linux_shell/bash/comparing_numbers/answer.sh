#!/bin/bash

read X
read Y

msg_lt="X is less than Y"
msg_gt="X is greater than Y"
msg_eq="X is equal to Y"

if test $X -lt  $Y; then
  echo $msg_lt
elif test $X -gt $Y; then
  echo $msg_gt
elif test $X -eq $Y; then
  echo $msg_eq
fi
