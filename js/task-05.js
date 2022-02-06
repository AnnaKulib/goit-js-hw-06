const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

const defaultInputValue = 'Anonymous';

inputValue.addEventListener('input', changeTextOnOutput);

function changeTextOnOutput(event) {
    outputValue.textContent = event.currentTarget.value !== "" ? event.currentTarget.value : defaultText; 
console.log(event.currentTarget.value);
}
