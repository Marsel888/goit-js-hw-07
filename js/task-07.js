const inpunt = document.querySelector('#font-size-control');
const magicTransformation = document.querySelector('#text');

inpunt.addEventListener('input', onInpunt);

function onInpunt(event) {
  const currentValue = event.currentTarget.value;
  magicTransformation.style.fontSize = currentValue + 'px';
}
