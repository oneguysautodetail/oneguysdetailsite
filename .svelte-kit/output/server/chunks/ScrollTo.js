import { n as noop, g as get_store_value } from "./index.js";
import { w as writable } from "./index2.js";
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
const elements = writable([]);
const globalOptions = writable({
  offset: 0,
  duration: 500,
  easing: cubicInOut,
  onStart: noop,
  onDone: noop
});
get_store_value(globalOptions);
get_store_value(elements);
