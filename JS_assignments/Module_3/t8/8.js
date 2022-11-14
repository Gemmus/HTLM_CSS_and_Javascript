'use strict';
const p = document.getElementById('result');
const calculate = document.getElementById('start');
calculate.addEventListener('click', function (e){
    e.preventDefault();
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    if (operation === 'add') {
        let addition = num1 + num2;
        p.innerText = `${num1} + ${num2} = ${addition}`;
    }
    else if (operation === 'sub') {
        let subtraction = num1 - num2;
        p.innerText = `${num1} - ${num2} = ${subtraction}`;
    }
    else if (operation === 'multi') {
        let multiplication = num1 * num2;
        p.innerText = `${num1} * ${num2} = ${multiplication}`;
    }
    else if (operation === 'div') {
        let division = num1 / num2;
        p.innerText = `${num1} : ${num2} = ${division}`;
    }
})