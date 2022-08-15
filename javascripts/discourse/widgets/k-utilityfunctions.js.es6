import { scheduleOnce } from "@ember/runloop";
import { createWidget } from 'discourse/widgets/widget';

let layoutsError;
let layouts;

try {
  
  alert("Usefully, these functions are also available.");

} catch(error) {

  console.error(error);


}

let x = myFunction(4, 3);   // Function is called, return value will end up in x
alert("x = " + x);

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

