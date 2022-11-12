// Styling elements:
const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);

const listItems = document.querySelectorAll('.list-items');
// for list element: needs a for loop
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem'
}

// Creating elements:
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding elements:
ul.append(li);

// Modifying the text:
const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText); //use this
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML); //don't use this

li.innerText = ('X-men');

//Modifying Attributes and Classes:
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const titled = document.querySelector('#main-heading')
console.log(titled.getAttribute('id'));

li.classList.add('list-items') //true
li.classList.remove('list-items') //false
console.log(li.classList.contains('list-items'));

// Remove elements:
li.remove();