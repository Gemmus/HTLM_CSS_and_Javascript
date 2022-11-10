'use strict';
const name = prompt('Please enter your name:');
const number = Math.floor(Math.random()*4)+1;
let house;
console.log(result)
if (number === 1)
    house = 'Daredevil';
else if (number === 2)
    house = 'Slytherin';
else if (number === 3)
    house = 'Hufflepuff';
else
    house = 'Ravenclaw';
document.querySelector('#house').innerHTML = ''+ name + ', you are ' + house + '.';