let buttonPlus = document.querySelector('[data-plus]');
let buttonMinus = document.querySelector('[data-minus]');
let buttonMultiply = document.querySelector('.button--multiply');
let buttonDevide = document.querySelector('[data-devide]');

let input1 = document.querySelector('[data-inputOne]');
let input2 = document.querySelector('[data-inputTwo]');

const makeOperation = (operation) => {

let number1 = Number(input1.value);
let number2 = Number(input2.value);

  let result;
  if (operation === '+') {
    result = number1 + number2;
  } else if (operation === '-') {
    result = number1 - number2;
  } else if (operation === '*') {
    result = number1 * number2;
  } else if (operation === '/') {
    result = number1 / number2;
  } else {
    alert('operation is unknown');
  }
  alert(result)
}

const onOperationButtonClick = (e) => {
  let clickedElement = e.currentTarget;
  let operation = clickedElement.innerHTML;
  makeOperation(operation);
}

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);
