import { scheduleOnce } from "@ember/runloop";
import { createWidget } from 'discourse/widgets/widget';

let layoutsError;
let layouts;

try {
  
  alert("Hello! I am an alert box called from within the Widget js file!!");

} catch(error) {

  console.error(error);

}
