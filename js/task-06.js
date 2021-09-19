const validationInput = document.querySelector('#validation-input');

const validNumber = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', onBlur);

function onBlur(event) {
  const currentLength = event.currentTarget.value.length;

  if (validNumber === currentLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
}
