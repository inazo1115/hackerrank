seq 1 100|while read i;do if [ $((i % 15)) -eq 0 ];then echo "FizzBuzz";elif [ $((i % 3)) -eq 0 ];then echo "Fizz";elif [ $((i % 5)) -eq 0 ];then echo "Buzz";else echo $i;fi;done
