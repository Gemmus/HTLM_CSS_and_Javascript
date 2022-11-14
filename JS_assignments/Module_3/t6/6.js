'use strict';
function alertButton() {
    alert('Button Clicked');
}
const button = document.querySelector('button');
button.addEventListener("click", alertButton);