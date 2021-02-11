https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

6 kyu
Bit Counting
115321087% of 13,77127,974 of 101,161xcthulhu1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};
