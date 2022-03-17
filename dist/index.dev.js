"use strict";

var buttonPlus = document.querySelector('[data-plus]');
var buttonMinus = document.querySelector('[data-minus]');
var buttonMultiply = document.querySelector('.button--multiply');
var buttonDevide = document.querySelector('[data-devide]');
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

var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

for (var i = 0; i < operationButtons.length; i++) {
  var button = operationButtons[i];
  button.addEventListener('click', onOperationButtonClick);
}