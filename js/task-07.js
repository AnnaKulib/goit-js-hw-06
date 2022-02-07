const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = input.value + 'px';

input.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}