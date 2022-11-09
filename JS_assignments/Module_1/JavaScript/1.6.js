'use strict';
let inquiry = confirm('Should I calculate the square root?');

if (inquiry === true) {
    let enteredNumber = prompt('Please enter a number:');
    if (enteredNumber < 0) {
        document.querySelector('#outcome').innerHTML = 'The square root of a negative number is not defined.';
    }
    else {
        let number = parseInt(enteredNumber);
        let squareRoot = number * number;
        document.querySelector('#outcome').innerHTML = 'The square root of the number is: ' + squareRoot + '.';
    }
}
else {
    document.querySelector('#outcome').innerHTML = 'The square root is not calculated.';
}