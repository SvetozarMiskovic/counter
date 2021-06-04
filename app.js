const number = document.querySelector('.counter');
const btnDec = document.querySelector('.btn-dec');
const btnRes = document.querySelector('.btn-res');
const btnInc = document.querySelector('.btn-inc');
const btnAdd = document.querySelector('.btn-add');
const added = document.querySelector('.added');

let counter = 0;
let addedValue = 0;
number.textContent = counter;
added.textContent = addedValue;

btnDec.addEventListener('click', function () {
  counter--;
  number.textContent = counter;
  changeColor();
});

btnRes.addEventListener('click', function () {
  counter = 0;
  addedValue = 0;
  added.textContent = addedValue;
  number.textContent = counter;
  changeColor();
});

btnInc.addEventListener('click', function () {
  counter++;
  number.textContent = counter;
  changeColor();
});

btnAdd.addEventListener('click', function () {
  addedValue += counter;
  counter = 0;
  number.textContent = counter;
  added.textContent = addedValue;
  changeColor();
});

function changeColor() {
  if (counter > 0) {
    number.style.color = 'green';
  } else if (counter < 0) {
    number.style.color = 'red';
  } else if (counter === 0) {
    number.style.color = 'black';
  }
}
