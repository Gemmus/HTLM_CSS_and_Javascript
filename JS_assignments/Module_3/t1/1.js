'use strict';
const ul = document.querySelector('#target');
ul.innerHTML = `<li>First item</li>
                <li>Second item</li>
                <li>Third item</li>`;
ul.setAttribute('class', 'my-list');