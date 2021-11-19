import LinearCongruential from './classes/LinearCongruential';
import MiddleSquare from './classes/MiddleSquare';

var canvas = <HTMLCanvasElement> document.getElementById("canvas");
var context = canvas.getContext("2d");

let calculationTypes = new Array<CalculationType>(new LinearCongruential, new MiddleSquare);
var selectedCalculation = (<HTMLSelectElement>document.getElementById("selectCalculation"));


var y = 0;
var congruential = new LinearCongruential();
var currentIteration = 0;
populateCalculationTypes();
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

function populateCalculationTypes(){
  var select = document.getElementById("selectCalculation");

  for(var i = 0; i < calculationTypes.length; i++) {
      var calculationType = calculationTypes[i];
      var el = document.createElement("option");
      el.textContent = calculationType.label;
      el.nodeValue = calculationType.label;
      select?.appendChild(el);
  }
}

function populateCalculationTypeInfo(){
  var head = document.getElementById("calculationTypeHead");
  var body = document.getElementById("calculationTypeBody");
  head!.innerHTML = selectedCalculation!.value;
  body!.innerHTML = calculationTypes.find(e => e.label === selectedCalculation!.value)?.explanation!;
}

selectedCalculation.addEventListener('change', function(){
  populateCalculationTypeInfo();
});