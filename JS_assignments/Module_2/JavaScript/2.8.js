'use strict';

function concat(items){
    let text = '';
    for (let i = 0; i < items.length; i++) {
        text += items[i];
    }
    return text;
}

let list = ['CaptainAmerica', 'IronMan', 'Thor', 'Hulk', 'BlackWidow', 'Hawkeye'];
let result = concat(list);
document.querySelector('#concatenated').innerHTML = result;