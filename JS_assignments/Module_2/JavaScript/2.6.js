'use strict';

function roleDice() {
    return Math.floor(Math.random()*6)+1;
}

let rolled_numbers = [];
let number = roleDice();
rolled_numbers.push(number);
while (number !== 6) {
    number = roleDice();
    rolled_numbers.push(number);
}

let ul = document.createElement('ul');
for (let roll of rolled_numbers) {
    let li = document.createElement('li');
    li.innerText = roll;
    ul.append(li);
}
document.body.append(ul);