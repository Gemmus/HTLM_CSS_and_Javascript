'use strict';
let list_of_numbers = [];
let enteredNumber = prompt('Please enter a number or enter zero to quit:');
let input = +enteredNumber;

while (input !== 0) {
    list_of_numbers.push(input);
    enteredNumber = prompt('Please enter a number or enter zero to quit:');
    input = +enteredNumber;
}

list_of_numbers.sort((a,b) => a-b);
list_of_numbers.reverse();

for (let number of list_of_numbers) {
    console.log(number);
}
