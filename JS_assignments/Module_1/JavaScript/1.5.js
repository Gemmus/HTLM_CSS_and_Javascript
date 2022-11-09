'use strict';
let year = prompt('Please enter a year: ');
while (year < 0) {
    year = prompt('Please enter a valid year: ');
}
let Year = parseInt(year);
if ((Year %= 4) === 0) {
    if ((Year %= 100) !== 0) {
            document.querySelector('#result').innerHTML = '' + year + ' is a year.';
    }
    else {
        if ((Year %= 400) === 0) {
            document.querySelector('#result').innerHTML = '' + year + ' is leap year.';
        }
        else {
            document.querySelector('#result').innerHTML = '' + year + ' is not a leap year.';
        }
    }
}
else {
    document.querySelector('#result').innerHTML = '' + year + ' is not a leap year.';
}