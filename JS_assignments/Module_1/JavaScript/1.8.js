'use strict';
let startYear = prompt('Please enter the starting year:');
let endYear = prompt('Please enter the ending year:');
let start = parseInt(startYear);
let end = parseInt(endYear);

let list = [];
while (start <= end) {
    if ((start % 4) === 0)
        if ((start % 100) !== 0)
            list.push(start);
    else
        if ((start % 400) === 0)
            list.push(start);
    start++;
}

let ul = document.createElement('ul');

for (let i of list) {
    let li = document.createElement('li');
    li.innerText = i;
    ul.append(li);
}

document.body.append(ul);