// DOM Manipulation

// GetElementById()

const title = document.getElementById('main-heading');
console.log(title);

// GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

// GetElementByTagName()

const withTag= document.getElementsByTagName('li');
console.log(withTag);

//querySelector() selects the first of any element

const container = document.querySelector('div')
console.log(container)

// querySelectorAll() returns a NodeList

const contain = document.querySelectorAll('div')
console.log(contain)