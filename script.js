const p = document.createElement('p');
p.textContent = 'js test...';

document.querySelector('body').appendChild(p);


const add = (a,b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    // if (b === 0) {
    //     console.log("Don't try to divide by zero!");
    //     calcDisplay.textContent = '';
    //     return 
    // };
    return a / b;
};

let firstNum = 0;
let secondNum = 0;
let operator = 'none';

const operate = (firstNum, secondNum, operator) => {
    firstNum = +(parseFloat(firstNum).toFixed(2));
    secondNum = +(parseFloat(secondNum).toFixed(2));
    let result = 0;
    switch(operator){
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = subtract(firstNum, secondNum);
            break;
        case 'x':
        case '*':
            result = multiply(firstNum, secondNum);
            break;
        case '%':
        case '/':
            result = divide(firstNum, secondNum);
            break;
        default:
            result = `Something is wrong in operate.
            \n These are the variables passed:
            \n firstNum = ${firstNum}
            \n secondNum = ${secondNum}
            \n operator = ${operator}`;
    }
    console.log(result);
    return result;
}

const numBtns = document.querySelectorAll('.numBtn');
const optBtns = document.querySelectorAll('.optBtn');
const calcDisplay = document.querySelector('.calcDisplay');
let calcDisplayVal = calcDisplay.textContent;

const addToDisplay = (btns) => {
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            calcDisplay.textContent += btn.textContent;
            calcDisplayVal = calcDisplay.textContent;
        })
    });
}

addToDisplay(numBtns);
addToDisplay(optBtns);

const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = '';
    calcDisplayVal = '';
});

const equalBtn = document.querySelector('.equalBtn');
equalBtn.addEventListener('click', () => {
    //regex for not digit
    //bug picks up dot instead TODO: ignore dot
    let optArr = calcDisplay.textContent.match(/[+\-x%]/g);
    let numArr = calcDisplay.textContent.split(/[+\-x%]/);
    //the order is firstNum, secondNum, operator 
    let result = operate(numArr[0], numArr[1], optArr[0]).toFixed(2);
    calcDisplay.textContent = `${result}${optArr[1] || ''}`;
    calcDisplayVal = calcDisplay.textContent;
});

