import { countElement } from './const.js';

var count = 0;

var incrementCount = function() {
    count++;
    countElement.textContent = count;
    
}
var decrementCount = function() {
    count--;
    countElement.textContent = count;
}

export {incrementCount, decrementCount};