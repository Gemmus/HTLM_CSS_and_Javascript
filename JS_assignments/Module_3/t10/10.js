'use strict';
const form = document.getElementById('source');
const first = document.querySelector('input[name=firstname]');
const last = document.querySelector('input[name=lastname]');
const p = document.querySelector('p');
form.addEventListener('submit', function (e){
    e.preventDefault();
    p.innerText = `You name is ${first.value} ${last.value}.`;
})