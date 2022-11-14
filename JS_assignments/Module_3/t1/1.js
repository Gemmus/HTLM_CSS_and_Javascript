'use strict';
const ul = document.querySelector('#target');
const li =
    `<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`;
ul.innerHTML = li;
ul.setAttribute('class', 'my-list');