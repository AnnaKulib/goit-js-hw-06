const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

btnDecrement.addEventListener('click', onBtnDecrementClick);
btnIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onBtnIncrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}