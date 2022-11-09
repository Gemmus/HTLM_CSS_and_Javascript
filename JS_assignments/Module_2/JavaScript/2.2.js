'use strict';
const number_of_participants = prompt('Please enter the number of participants:');
let participants = parseInt(number_of_participants);
let list_of_participants = []
for (let i = 0; i < participants; i++) {
    let participant = prompt('Please enter the name of the participant:');
    list_of_participants.push(participant)
}

let ol = document.createElement('ol');
for (let name of list_of_participants) {
    let li = document.createElement('li');
    li.innerText = name;
    ol.append(li)
}
document.body.append(ol);