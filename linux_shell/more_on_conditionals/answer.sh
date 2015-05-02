#!/bin/bash

read X
read Y
read Z

msg_sca="SCALENE"
msg_iso="ISOSCELES"
msg_equ="EQUILATERAL"

if [ $X -eq $Y -a $Y -eq $Z ]; then
  echo $msg_equ
elif [ $X -ne $Y -a $Y -ne $Z -a $Z -ne $X ]; then
  echo $msg_sca
else
  echo $msg_iso
fi
