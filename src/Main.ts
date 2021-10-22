import LinearCongruential from './classes/LinearCongruential';
import MiddleSquare from './classes/MiddleSquare';

var canvas = <HTMLCanvasElement> document.getElementById("canvas");
var context = canvas.getContext("2d");

var y = 0;
var congruential = new LinearCongruential();
var currentIteration= 0;
draw();
function draw() {
  for(var x = 0; x < 600; x++) {
    currentIteration = congruential.nextRandomFloat();
    if(currentIteration < 0.5) {
      context!.fillStyle = "#000000";
      context!.fillRect(x, y, 1, 1);
    }
    else if(currentIteration > 0.5){
      context!.fillStyle = "#ff0000";
      context!.fillRect(x, y, 1, 1)
    }
  }
  y++;
  if(y < 600) {
    requestAnimationFrame(draw);
  }
}