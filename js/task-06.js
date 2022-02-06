const inputEl = document.querySelector('#validation-input');
const validLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputValueLength = event.currentTarget.value.length;
    inputEl.classList.add (inputValueLength !== validLength ? 'invalid' : 'valid');
    inputEl.classList.remove (inputValueLength === validLength ? 'invalid' : 'valid');
}
