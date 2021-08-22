const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const temp = document.querySelector('.temp');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const alClear = document.querySelector('.all-clear');
const lastClear = document.querySelector('.last-entity-clear');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');

let disNum1 = '';
let disNum2 = '';
let operation = '';
let result = null;
let haveDot = false;


const product = 5; const price = '7'; const subTotal = product * price; const tax = subTotal / 10; const total = subTotal + tax;
console.log(total);
for (const number of numbers) {
    number.addEventListener('click', function (e) {
        const val = e.target.innerText;
        if (val === '.' && !haveDot) {
            haveDot = true;
        } else if (val === '.' && haveDot) {
            return;
        }
        disNum2 = e.target.innerText;
        display2.innerText += disNum2;
    });
}



for (const operator of operators) {
    operator.addEventListener('click', function (e) {
        if (!disNum2) {
            return;
        }
        const oparatorName = e.target.innerText;
        haveDot = false;
        if (disNum1 && disNum2 && operation) {
            calculation();
        } else {
            result = parseFloat(disNum2);
        }

        clearVer(oparatorName);
        operation = oparatorName;
    });
}

function clearVer(name = "") {
    disNum1 += disNum2 + " " + name + " ";
    display1.innerText = disNum1;
    display2.innerText = '';
    disNum2 = '';
    temp.innerText = result;
}



alClear.addEventListener('click', function () {
    display1.innerText = '';
    display2.innerText = '';
    temp.innerText = '';
});

function calculation() {

    if (operation === 'X') {
        result = parseFloat(result) * parseFloat(disNum2);
    } else if (operation === '/') {
        result = parseFloat(result) / parseFloat(disNum2);
    }
    else if (operation === '+') {
        result = parseFloat(result) + parseFloat(disNum2);
    }
    else if (operation === '-') {
        result = parseFloat(result) - parseFloat(disNum2);
    }
    else if (operation === '%') {
        result = parseFloat(result) % parseFloat(disNum2);
    }
}

equal.addEventListener('click', function () {
    if (!disNum1 || !disNum2) {
        return;
    }
    haveDot = false;
    calculation();
    clearVer();
    display2.innerText = result;
    temp.innerText = '';
    disNum2 = result;
    disNum1 = '';

});