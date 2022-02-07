const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

input.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}