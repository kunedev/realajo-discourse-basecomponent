import { scheduleOnce } from "@ember/runloop";
import { createWidget } from 'discourse/widgets/widget';

let layoutsError;
let layouts;

try {
  
  alert("Evidently, I can run any JS I need here.");

} catch(error) {

  console.error(error);

}
