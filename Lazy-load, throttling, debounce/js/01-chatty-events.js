const coordsOutput = document.querySelector('.js-coords');

let mouseMoveCounter = 0;
window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(e) {
  mouseMoveCounter++;
  coordsOutput.textContent = `К-ть викликів onMouseMove: ${mouseMoveCounter}; 
  X: ${e.clientX}; Y: ${e.clientY};`;
}

const inputChangesOutput = document.querySelector('.js-output');

let inputCounter = 0;

const input = document.querySelector('.js-input');
input.addEventListener('input', _.debounce(onInputChange, 250));

function onInputChange(e) {
  inputCounter++;
  inputChangesOutput.textContent = `К-ть викликів onInputChange: ${inputCounter}`;
}
