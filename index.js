"use strict";
const result = document.querySelector("#result");
const allClearBtn = document.querySelector("#all-clear-button");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const dotButton = document.querySelector("#dot-button");
const negativeButton = document.querySelector("#negative-button");
const percentageButton = document.querySelector("#percentage-button");
let num1 = '';
let num2 = '';
let operatorApplied = false;
let operator = '';
equalButton.addEventListener("click", () => {
    let resultValue;
    if (num1 && !num2 && operatorApplied == false) {
        resultValue = num1;
    }
    else if (num1 && num2 && operatorApplied == true) {
        let parsedNum1 = parseFloat(num1);
        let parsedNum2 = parseFloat(num2);
        if (operator == '÷') {
            if (parsedNum2 == 0) {
                result.textContent = 'Error';
                num1 = '';
                num2 = '';
                operator = '';
                operatorApplied = false;
                return;
            }
            resultValue = parsedNum1 / parsedNum2;
        }
        else if (operator == '×') {
            resultValue = parsedNum1 * parsedNum2;
        }
        else if (operator == '–') {
            resultValue = parsedNum1 - parsedNum2;
        }
        else if (operator == '+') {
            resultValue = parsedNum1 + parsedNum2;
        }
    }
    result.textContent = String(resultValue);
    num1 = String(resultValue);
    num2 = '';
    operator = '';
    operatorApplied = false;
});
negativeButton.addEventListener("click", () => {
    if (num2 == '') {
        let parsedNum1 = parseFloat(num1);
        parsedNum1 *= -1;
        num1 = String(parsedNum1);
        result.textContent = num1;
    }
    else {
        let parsedNum2 = parseFloat(num2);
        parsedNum2 *= -1;
        num2 = String(parsedNum2);
        result.textContent = num2;
    }
});
percentageButton.addEventListener("click", () => {
    if (num2 == '') {
        let parsedNum1 = parseFloat(num1);
        parsedNum1 *= 0.01;
        num1 = String(parsedNum1);
        result.textContent = num1;
    }
    else {
        let parsedNum2 = parseFloat(num2);
        parsedNum2 *= 0.01;
        num2 = String(parsedNum2);
        result.textContent = num2;
    }
});
allClearBtn.addEventListener("click", () => {
    result.textContent = '0';
    num1 = '';
    num2 = '';
    operator = '';
    operatorApplied = false;
});
dotButton.addEventListener("click", () => {
    if (operatorApplied == false && num1.includes('.') == false) {
        num1 += '.';
        result.textContent = num1;
    }
    else if (operatorApplied == true && num2.includes('.') == false) {
        num2 += '.';
        result.textContent = num2;
    }
});
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (operatorApplied == false) {
            operator = operatorButton.textContent || '';
            operatorApplied = true;
        }
    });
});
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
        if (operatorApplied == false) {
            num1 += numberButton.textContent;
            result.textContent = num1;
        }
        else {
            num2 += numberButton.textContent;
            result.textContent = num2;
        }
    });
});
