https://www.codewars.com/kata/5a5f9f80f5dc3f942b002309/train/javascript

6 kyu
Schrödinger's Boolean
1353287% of 355490 of 1,659docgunthrop
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Can a value be both true and false?

Define omniBool so that it returns true for the following:

omniBool == true && omniBool == false
If you enjoyed this kata, be sure to check out my other katas.

const omnibool = {n:1,valueOf:()=>this.n=!this.n}
