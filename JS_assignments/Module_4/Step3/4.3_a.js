'use strict';
const search = document.getElementById('search');
search.addEventListener('click', function () {
    let division = document.getElementById('result')
    division.innerHTML = '';
    const input = document.getElementById('input').value;
    console.log(input);
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.tvmaze.com/search/shows?q=' + input);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const returnedData = JSON.parse(request.responseText);
            appendHTML(returnedData);
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
    let div = document.getElementById('result');
    for (let i = 0; i < data.length; i++) {
        let article = document.createElement("article");
        div.appendChild(article)
        let h2 = document.createElement('h2');
        h2.innerText = data[i].show.name;
        article.append(h2);
        let h3 = document.createElement('h3');
        let genre = '';
        for (let ii = 0; ii < data[i].show.genres.length; ii++) {
            if (ii === 0) {
                genre += data[i].show.genres[ii] ;
            } else {
                genre += ' | ' + data[i].show.genres[ii];
            }
        }
        h3.append(genre);
        article.append(h3);
        let image = document.createElement('img');
        image.alt = 'Picture of the show';
        console.log(typeof(data[i].show.image.medium));
        try {
            image.src = data[i].show.image.medium;
        } catch (e) {
            console.log('error');
        }
        article.append(image);
        let p = document.createElement('p');
        p.innerHTML = data[i].show.summary;
        article.append(p);
        let link = document.createElement('a');
        link.setAttribute('target', "_blank");
        link.href = data[i].show.url;
        link.innerText = 'Site';
        article.append(link);
    }
}
