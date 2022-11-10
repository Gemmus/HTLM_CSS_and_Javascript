'use strict';

function even(numbers) {
    let even_numbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 2) === 0) {
            even_numbers.push(numbers[i]);
        }
    }
    even_numbers.sort((a,b) => a-b);
    return even_numbers;
}

let old_list = [34, 57, 79, 26, 90, 43, 8, 13, 61, 88, 102];
let new_list = even(old_list);
console.log(old_list);
console.log(new_list);