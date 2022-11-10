'use strict';

function probabilityCalculator(dices, target) {
    let targetCounter = 0;
    for (let i = 0; i < 100000; i++) {
        let calculatedEye = 0;
        for (let n = 0; n < dices; n++) {
            let roll = Math.floor(Math.random() * 6) + 1;
            calculatedEye += roll;
        }
        if (calculatedEye === target) {
            targetCounter += 1;
        }
    }
    let probability = targetCounter / 1000;
    return probability.toFixed(2);
}

const diceNumber = parseInt(prompt('Please enter the number of dices:'));
const eye = parseInt(prompt('Please enter the sum of the eye number:'));
let result = probabilityCalculator(diceNumber, eye);
document.querySelector('#probability').innerHTML = '' + diceNumber + ' dice, sum ' + eye + ', probability is about ' + result + '%';