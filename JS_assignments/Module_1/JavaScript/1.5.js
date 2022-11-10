'use strict';
let year = parseInt(prompt('Please enter a year:'));
while (year < 0) {
    year = parseInt(prompt('Please enter a valid year:'));
}
if ((year % 4) === 0)
    if ((year % 100) !== 0)
            document.querySelector('#result').innerHTML = '' + year + ' is leap a year.';
    else
        if ((year % 400) === 0)
            document.querySelector('#result').innerHTML = '' + year + ' is leap year.';
        else
            document.querySelector('#result').innerHTML = '' + year + ' is not a leap year.';
else
    document.querySelector('#result').innerHTML = '' + year + ' is not a leap year.';
