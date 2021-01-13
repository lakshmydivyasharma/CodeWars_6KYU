https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

6 kyu
Find the unique number
106826189% of 5,38415,857 of 46,594isqua5 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

function findUniq(arr) {
  let newArr = []
  arr.sort()
  return (arr[0] !== arr[1]) ?  arr[0] : arr.pop()
}
