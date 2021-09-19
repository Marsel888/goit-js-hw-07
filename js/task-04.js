const counterValue = document.querySelector('#value');

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
let counter = 0;

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

function increment() {
  counter += 1;
  counterValue.textContent = counter;
}

function decrement() {
  counter -= 1;
  counterValue.textContent = counter;
}
