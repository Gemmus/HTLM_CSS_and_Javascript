'use strict';
let enterNumber = prompt('Please enter an integer:');
while (enterNumber < 0) {
    enterNumber = prompt('Please enter a valid integer:');
}
let number = parseInt(enterNumber);
if (number > 1) {
    if (number === 2) {
        document.querySelector('#verdict').innerHTML = '' + enterNumber + ' is a prime number.';
    }
    else {
        let statement = true;
        for (let i = 2; i < (number - 1); i++) {
            if ((number %= i) === 0) {
                document.querySelector('#verdict').innerHTML = '' + enterNumber + ' is not a prime number.';
                statement = false;
                break
            }
        }
        if (statement) {
            document.querySelector('#verdict').innerHTML = '' + enterNumber + ' is a prime number.';
        }
    }
}
else {
    document.querySelector('#verdict').innerHTML = '' + enterNumber + ' is not a prime number.';
}