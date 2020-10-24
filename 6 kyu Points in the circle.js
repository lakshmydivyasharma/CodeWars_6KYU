https://www.codewars.com/kata/5b55c49d4a317adff500015f/train/javascript

6 kyu
Points in the circle
521287% of 172160 of 842hubencu_st
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
You have the radius of a circle with the center in point (0,0).

Write a function that calculates the number of points in the circle where (x,y) - the cartesian coordinates of the points - are integers.

Example: for radius = 2 the result should be 13.

0 <= radius <= 1000

function pointsNumber(r){
  let points = 0
  for (let i=-r;i<=r;i++){
    for (let j=-r;j<=r;j++){
      if (i*i+j*j<=r*r) points++
    }
  }
  return points;
}
