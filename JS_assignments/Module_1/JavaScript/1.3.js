'use strict';
const num1 = parseInt(prompt('Please enter an integer:'));
const num2 = parseInt(prompt('Please enter an integer:'));
const num3 = parseInt(prompt('Please enter an integer:'));

const summary = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (num1 + num2 + num3)/3;
const rounded_average = average.toFixed(1);

document.querySelector('#addition').innerHTML = 'The summary of the entered integers is ' + summary + '.';
document.querySelector('#product').innerHTML = 'The product of the entered integers is ' + product + '.';
document.querySelector('#average').innerHTML = 'The average of the entered integers is ' + rounded_average + '.';