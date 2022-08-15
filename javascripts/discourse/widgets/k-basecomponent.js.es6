import { scheduleOnce } from "@ember/runloop";
import { createWidget } from 'discourse/widgets/widget';

let layoutsError;
let layouts;

try {
  
  alert("Evidently, I can run any JS I need here.");

} catch(error) {

  console.error(error);

}

let y = myFunction(4, 3);   // Function is called, return value will end up in x
alert("y = " + y);
