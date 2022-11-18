'use strict';

// Fetching data based on input:
const search = document.getElementById('search');
search.addEventListener('click', function () {
    let division = document.getElementById('result');
    division.innerHTML = '';
    const input = document.getElementById('input').value;
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

// Adding the fetched data accordingly:
function appendHTML(data) {
    console.log(data);
    let div = document.getElementById('result');
    for (let i = 0; i < data.length; i++) {
        // Article:
        let article = document.createElement("article");
        div.appendChild(article);

        // Title:
        let h2 = document.createElement('h2');
        h2.innerText = data[i].show.name;
        article.append(h2);

        // Genre:
        let h3 = document.createElement('h3');
        let genre = '';
        for (let ii = 0; ii < data[i].show.genres.length; ii++) {
            if (ii === 0)
                genre += data[i].show.genres[ii];
            else
                genre += ' | ' + data[i].show.genres[ii];
        }
        h3.append(genre);
        article.append(h3);

        // Image:
        let image = document.createElement('img');
        image.alt = 'Picture of the show';
        if (data[i].show.image === null) {
            image.src = 'https://via.placeholder.com/210x295?text=No+Image';
        } else {
            image.src = data[i].show.image.medium;
        }
        article.append(image);

        // Description:
        let p = document.createElement('p');
        p.innerHTML = data[i].show.summary;
        article.append(p);

        // Detail button:
        let detailBtn = document.createElement('button');
        detailBtn.setAttribute('class','siteBtn')
        detailBtn.innerText = 'Details';
        article.append(detailBtn);

        // Modal:
        let createDialog = document.createElement('dialog');
        let createSpan = document.createElement('span');
        createSpan.innerHTML = '&times;';
        const createIframe = document.createElement('iframe');
        createIframe.src = '';
        createIframe.frameborder = '0';
        createIframe.width = '900';
        createIframe.height = '500';
        createIframe.setAttribute('id', 'iframe');
        createDialog.appendChild(createSpan);
        createDialog.appendChild(createIframe);
        article.appendChild(createDialog);

        // Events for detail button:
        createSpan.addEventListener('click', function(){
            createDialog.close()});
        detailBtn.addEventListener('click', function(){
            createIframe.src = data[i].show.url;
            createDialog.showModal()});
    }}