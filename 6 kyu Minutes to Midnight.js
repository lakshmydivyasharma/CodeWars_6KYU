https://www.codewars.com/kata/58528e9e22555d8d33000163/train/javascript

6 kyu
Minutes to Midnight
17783% of 98146 of 414zruF1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Teemo is not really excited about the new year's eve, but he has to celebrate it with his friends anyway.

He has a really big passion about programming and he wants to be productive till midnight. He wants to know how many minutes he has left to work on his new project.
He doesn't want to look on the clock all the time, so he thought about a function, which returns him the number of minutes.

Can you write him a function, so he can stay productive?

The function minutesToMidnight(d) will take a date object as parameter. Return the number of minutes in the following format:

"x minute(s)"

You will always get a date object with of today with a random timestamp.
You have to round the number of minutes.
Milliseconds doesn't matter!

function minutesToMidnight(d){
  let s = d.getSeconds()
  let sum = (23-d.getHours())*60+(60-d.getMinutes())
  s>30?sum-=1:sum
  return sum===1?`1 minute`:`${sum} minutes`
}
