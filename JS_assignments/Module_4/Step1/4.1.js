'use strict';
const search = document.getElementById('search');
search.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.tvmaze.com/search/shows?q=' + input);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            console.log(data);
        } else {
            console.log('Server returned an error.');
        }
    };
    request.onerror = function () {
        console.log('Connection error');
    };
    request.send();
});