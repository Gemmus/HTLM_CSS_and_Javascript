'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const ul = document.querySelector('#target');
const student1 = document.createElement('option');
const student2 = document.createElement('option');
const student3 = document.createElement('option');
student1.innerText = students[0].name;
student2.innerText = students[1].name;
student3.innerText = students[2].name;
student1.setAttribute('value', students[0].id);
student2.setAttribute('value', students[1].id);
student3.setAttribute('value', students[2].id);
ul.appendChild(student1);
ul.appendChild(student2);
ul.appendChild(student3);