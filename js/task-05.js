const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

const defaultInputValue = 'Anonymous';

inputValue.addEventListener('input', changeTextOnOutput);

function changeTextOnOutput(event) {
    const value = event.currentTarget.value.trim();
    outputValue.textContent = value ? value : defaultText; 
console.log(event.currentTarget.value);
}
