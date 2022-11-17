'use strict';
const search = document.getElementById('search');
search.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    console.log(input);
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.tvmaze.com/search/shows?q=' + input);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const returnedData = JSON.parse(request.responseText);
            appendHTML(returnedData[1]);
        } else {
            console.log('Server returned an error.');
        }
    };
    request.onerror = function () {
        console.log('Connection error');
    };
    request.send();
});

function appendHTML(data) {
    console.log(data);
    let article = document.getElementById('card');
    let h2 = document.createElement('h2');
    h2.innerText = data.show.name;
    article.append(h2);
    let h3 = document.createElement('h3');
    let genre = '';
    for (let i = 0; i < data.show.genres.length; i++) {
        if (i === 0) {
        genre += data.show.genres[i] ;
      } else {
        genre += ' | ' + data.show.genres[i];
      }
    }
    h3.append(genre);
    article.append(h3);
    let image = document.createElement('img');
    image.src = data.show.image.medium;
    image.alt = 'Picture of the show';
    article.append(image);
    let p = document.createElement('p');
    p.innerHTML = data.show.summary;
    article.append(p);
    let link = document.createElement('a');
    link.setAttribute('target', "_blank");
    link.href = data.show.url;
    link.innerText = 'Site';
    article.append(link);
}