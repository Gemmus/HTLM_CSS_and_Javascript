// Event Listeners:

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I don\'t love JavaScript');
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover: doesn't work in practice since we don't have the style original implemented

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);