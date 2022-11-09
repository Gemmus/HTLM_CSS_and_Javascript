'use strict';
let list_of_dogs = []
for (let i = 0; i < 6; i++) {
    let name_of_dog = prompt('Please enter the name of the dog:');
    list_of_dogs.push(name_of_dog)
}
list_of_dogs.sort()
list_of_dogs.reverse()

let ul = document.createElement('ul');
for (let dog of list_of_dogs) {
    let li = document.createElement('li');
    li.innerText = dog;
    ul.append(li)
}
document.body.append(ul);