'use strict';
const effect = document.querySelector('#trigger');
let target = document.querySelector('#target');
function changePicture() {
    target.src="img/picB.jpg";
}
effect.addEventListener("mouseover", changePicture);
function changePicBack() {
    target.src="img/picA.jpg";
}
effect.addEventListener("mouseout", changePicBack);