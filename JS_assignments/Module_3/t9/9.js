'use strict';
const p = document.getElementById('result');
const calculation = document.getElementById('start');
calculation.addEventListener('click', function (e){
    e.preventDefault();
    const input = document.getElementById('calculation').value;
    let array, num1, num2;
    const add = input.includes('+')
    if (add === true) {
        array = input.split('+');
        num1 = parseInt(array[0]);
        num2 = parseInt(array[1]);
        let sum = num1 + num2;
        p.innerText = `${num1} + ${num2} = ${sum}`
    }
    const sub = input.includes('-')
    if (sub === true) {
        array = input.split('-');
        num1 = parseInt(array[0]);
        num2 = parseInt(array[1]);
        let sum = num1 - num2;
        p.innerText = `${num1} - ${num2} = ${sum}`
    }
    const multi = input.includes('*')
    if (multi === true) {
        array = input.split('*');
        num1 = parseInt(array[0]);
        num2 = parseInt(array[1]);
        let sum = num1 * num2;
        p.innerText = `${num1} * ${num2} = ${sum}`
    }
    const div = input.includes('/')
    if (div === true) {
        array = input.split('/');
        num1 = parseInt(array[0]);
        num2 = parseInt(array[1]);
        let sum = num1 / num2;
        p.innerText = `${num1} / ${num2} = ${sum}`
    }
});