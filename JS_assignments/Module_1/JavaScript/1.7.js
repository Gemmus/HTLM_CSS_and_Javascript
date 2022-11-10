'use strict';
let number = parseInt(prompt('Please enter the number of dices:'));
while (number < 0) {
    number = parseInt(prompt('Please enter the valid number of dices:'));
}
let summary = 0;
for ( let n = 0; n < number; n++) {
    let rolledNumber = Math.floor(Math.random()*6)+1;
    console.log(rolledNumber);
    summary += rolledNumber;
}
document.querySelector('#sumOfDices').innerHTML = 'The added value of the dices: ' + summary + '.';