const newName = document.querySelector('span#name-output');

const inputName = document.querySelector('#name-input');

inputName.addEventListener('input', onInput);

function onInput(event) {
 
  newName.textContent = event.currentTarget.value;
  if (newName.textContent === '') {
    newName.textContent = 'незнакомец';
  }
}
