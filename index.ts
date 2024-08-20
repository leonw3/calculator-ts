const result = document.querySelector("#result") as HTMLElement;
const allClearBtn = document.querySelector("#all-clear-button") as HTMLButtonElement;
const numberButtons = document.querySelectorAll(".number-button") as NodeListOf<HTMLElement>;
const operatorButtons = document.querySelectorAll(".operator-button") as NodeListOf<HTMLElement>;
const equalButton = document.querySelector("#equal-button") as HTMLButtonElement;
const dotButton = document.querySelector("#dot-button") as HTMLButtonElement;
const negativeButton = document.querySelector("#negative-button") as HTMLButtonElement;
const percentageButton = document.querySelector("#percentage-button") as HTMLButtonElement;

let num1: string = '';
let num2: string = '';
let operatorApplied: boolean = false;
let operator: string = '';

equalButton.addEventListener("click", () => {
    let resultValue;
    if (num1 && !num2 && operatorApplied == false) {
        resultValue = num1;
    }
    else if (num1 && num2 && operatorApplied == true) {
        let parsedNum1: number = parseFloat(num1);
        let parsedNum2: number = parseFloat(num2);

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
        let parsedNum1: number = parseFloat(num1);
        parsedNum1 *= -1;
        num1 = String(parsedNum1);
        result.textContent = num1;
    }
    else {
        let parsedNum2: number = parseFloat(num2);
        parsedNum2 *= -1;
        num2 = String(parsedNum2);
        result.textContent = num2;
    }
});

percentageButton.addEventListener("click", () => {
    if (num2 == '') {
        let parsedNum1: number = parseFloat(num1);
        parsedNum1 *= 0.01;
        num1 = String(parsedNum1);
        result.textContent = num1;
    }
    else {
        let parsedNum2: number = parseFloat(num2);
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
            num1 += numberButton.textContent
            result.textContent = num1;
        }
        else {
            num2 += numberButton.textContent
            result.textContent = num2;
        }
    });
}); 
