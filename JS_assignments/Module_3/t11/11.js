'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

const section = document.querySelector('#pictures');

const article1 = document.createElement("article");
const h21 = document.createElement("h2");
const figure1 = document.createElement("figure");
const img1 = document.createElement("img");
const figcaption1 = document.createElement("figcaption");
const p1 = document.createElement("p");
h21.innerText = picArray[0].title;
img1.src= picArray[0].image.medium;
img1.alt = picArray[0].title;
figcaption1.innerText = picArray[0].caption;
p1.innerText = picArray[0].description;
console.log(article1)
section.appendChild(article1);
article1.appendChild(h21);
article1.appendChild(figure1);
figure1.appendChild(img1);
figure1.appendChild(figcaption1);
article1.appendChild(p1);
article1.setAttribute('class', "card");

const article2 = document.createElement("article");
const h22 = document.createElement("h2");
const figure2 = document.createElement("figure");
const img2 = document.createElement("img");
const figcaption2 = document.createElement("figcaption");
const p2 = document.createElement("p");
h22.innerText = picArray[1].title;
img2.src=picArray[1].image.medium;
img2.alt = picArray[1].title;
figcaption2.innerText = picArray[1].caption;
p2.innerText = picArray[1].description;
section.appendChild(article2);
article2.appendChild(h22);
article2.appendChild(figure2);
figure2.appendChild(img2);
figure2.appendChild(figcaption2);
article2.appendChild(p2);
article2.setAttribute('class', "card");

const article3 = document.createElement("article");
const h23 = document.createElement("h2");
const figure3 = document.createElement("figure");
const img3 = document.createElement("img");
const figcaption3 = document.createElement("figcaption");
const p3 = document.createElement("p");
h23.innerText = picArray[2].title;
img3.src= picArray[2].image.medium;
img3.alt = picArray[2].title;
figcaption3.innerText = picArray[2].caption;
p3.innerText = picArray[2].description;
section.appendChild(article3);
article3.appendChild(h23);
article3.appendChild(figure3);
figure3.appendChild(img3);
figure3.appendChild(figcaption3);
article3.appendChild(p3);
article3.setAttribute('class', "card");

const article4 = document.createElement("article");
const h24 = document.createElement("h2");
const figure4 = document.createElement("figure");
const img4 = document.createElement("img");
const figcaption4 = document.createElement("figcaption");
const p4 = document.createElement("p");
h24.innerText = picArray[3].title;
img4.src= picArray[3].image.medium;
img4.alt = picArray[3].title;
figcaption4.innerText = picArray[3].caption;
p4.innerText = picArray[3].description;
section.appendChild(article4);
article4.appendChild(h24);
article4.appendChild(figure4);
figure4.appendChild(img4);
figure4.appendChild(figcaption4);
article4.appendChild(p4);
article4.setAttribute('class', "card");

const article5 = document.createElement("article");
const h25 = document.createElement("h2");
const figure5 = document.createElement("figure");
const img5 = document.createElement("img");
const figcaption5 = document.createElement("figcaption");
const p5 = document.createElement("p");
h25.innerText = picArray[4].title;
img5.src= picArray[4].image.medium;
img5.alt = picArray[4].title;
figcaption5.innerText = picArray[4].caption;
p5.innerText = picArray[4].description;
section.appendChild(article5);
article5.appendChild(h25);
article5.appendChild(figure5);
figure5.appendChild(img5);
figure5.appendChild(figcaption5);
article5.appendChild(p5);
article5.setAttribute('class', "card");

const modalBtn = document.querySelector('dialog');
const closeBtn = document.querySelector('span')
const img = document.querySelector('img');

article1.addEventListener('click', function (){
      modalBtn.showModal();
      modalBtn.style.display = 'block';
      img.src = picArray[0].image.large;
      img.alt = picArray[0].title;
})
closeBtn.addEventListener('click', function(){

})