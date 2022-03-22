"use strict";

//let buttonPlus = document.querySelector('[data-plus]');
//let buttonMinus = document.querySelector('[data-minus]');
//let buttonMultiply = document.querySelector('.button--multiply');
//let buttonDevide = document.querySelector('[data-devide]');
//const operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];
var operationButtons = document.getElementsByClassName('operation-button');
var input1 = document.querySelector('[data-inputOne]');
var input2 = document.querySelector('[data-inputTwo]');

var makeOperation = function makeOperation(operation) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);
  var result;

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

  alert(result);
};

var onOperationButtonClick = function onOperationButtonClick(e) {
  var clickedElement = e.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
};

for (var i = 0; i < operationButtons.length; i++) {
  var button = operationButtons[i];
  button.addEventListener('click', onOperationButtonClick);
}