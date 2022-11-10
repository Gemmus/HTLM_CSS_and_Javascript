'use strict';
let number = parseInt(prompt('Please enter an integer:'));
while (number < 0) {
    number = parseInt(prompt('Please enter a valid integer:'));
}
if (number > 1) {
    if (number === 2) {
        document.querySelector('#verdict').innerHTML = '' + number + ' is a prime number.';
    }
    else {
        let statement = true;
        for (let i = 2; i < (number - 1); i++) {
            if ((number % i) === 0) {
                document.querySelector('#verdict').innerHTML = '' + number + ' is not a prime number.';
                statement = false;
                break
            }
        }
        if (statement) {
            document.querySelector('#verdict').innerHTML = '' + number + ' is a prime number.';
        }
    }
}
else {
    document.querySelector('#verdict').innerHTML = '' + number + ' is not a prime number.';
}