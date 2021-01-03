https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

6 kyu
Create Phone Number
125329183% of 12,50940,389 of 110,179xDranik2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

Solution:

// set 3 variables to be between each part. 0 1 and 2. 3 4 5. 6 7 8 9 10. to then be joined together in another variable

function createPhoneNumber(numbers) {
  const numbersString = numbers.join('')
  const firstSet = numbersString.slice(0, 3)
  const secondSet = numbersString.slice(3, 6)
  const thirdSet = numbersString.slice(6, 10)

  return `(${firstSet}) ${secondSet}-${thirdSet}`
}
