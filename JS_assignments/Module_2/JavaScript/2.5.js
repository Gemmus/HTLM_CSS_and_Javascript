'use strict';
let list_of_entered_numbers = [];
let enteredNumber = prompt('Please enter a number or enter zero to quit:');
let input = +enteredNumber;
let check = list_of_entered_numbers.includes(input);
while (check === false) {
    list_of_entered_numbers.push(input);
    enteredNumber = prompt('Please enter a number or enter zero to quit:');
    input = +enteredNumber;
    check = list_of_entered_numbers.includes(input);
}
console.log('Number has already been given.');
list_of_entered_numbers.sort((a,b) => a-b);
for (let number of list_of_entered_numbers) {
    console.log(number);
}
