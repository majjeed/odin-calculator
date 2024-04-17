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
    return a / b;
};

let firstNum = 0;
let secondNum = 0;
let operator = 'none';

const operate = (firstNum, secondNum, operator) => {
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

// numBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         calcDisplay.textContent += btn.textContent;
//     })
// });

// optBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         calcDisplay.textContent += btn.textContent;
//     })
// });

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

