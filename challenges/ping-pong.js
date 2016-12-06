/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE
var direction = 1;//I'm not going to code it out because it is late,
//but you could prompt the user for direction value and then store the positive
//and negative values to variables used by the moveBall function to get it to
//move multiple spaces.  You would also need additional if statements to deal
//with what happens when it is one away from the edge.  In this case it would
//return the

function moveBall(position, length){
  if(position===(length-1)){
    direction = -1;
  }
  if(position===0){
    direction = 1;
  }
  position += direction;
  return position;
}

var direction = prompt("How many spaces should I pong?");
var goRight = true;
function moveBall(position, length){
  if(position===(length-1)){
    direction = -1;
  }
  if(position===0){
    direction = 1;
  }
  position += direction;
  return position;
}

function pingPong(tableArray){
  var pongIndex;
  var newArray = [null,null,null,null];
  var tableLength = tableArray.length;
  var ball;
  var newPosition;
  tableArray.forEach(function(pongPosition){
    if(pongPosition){
      pongIndex = tableArray.indexOf(pongPosition);
      pongPosition.steps++;
      ball = pongPosition;
      newPosition = moveBall(pongIndex,tableLength);
    }
  });
  newArray[newPosition] = ball;
  console.log(newArray);
  return newArray;
}
