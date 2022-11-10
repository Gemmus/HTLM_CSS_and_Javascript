'use strict';

function roleDice(side) {
    return Math.floor(Math.random()*side)+1;
}

let rolled_numbers = [];
let sides = parseInt(prompt('How many sides does you dice have?'));
let number = roleDice(sides);
rolled_numbers.push(number);
while (number !== sides) {
    number = roleDice(sides);
    rolled_numbers.push(number);
}

let ul = document.createElement('ul');
for (let roll of rolled_numbers) {
    let li = document.createElement('li');
    li.innerText = roll;
    ul.append(li);
}
document.body.append(ul);