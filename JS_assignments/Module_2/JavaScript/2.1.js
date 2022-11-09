'use strict';
const number_1 = prompt('Please enter a number:');
const number_2 = prompt('Please enter a number:');
const number_3 = prompt('Please enter a number:');
const number_4 = prompt('Please enter a number:');
const number_5 = prompt('Please enter a number:');
let list_of_number = [number_1, number_2, number_3, number_4, number_5];

for (let i = list_of_number.length - 1; i >= 0; i--) {
        console.log(`Number: ${list_of_number[i]}`);
    }