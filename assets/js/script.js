"use strict"


let inputNumber = document.querySelector('#inputNumber');
let result = document.querySelector('#result');
let error = document.querySelector('#error');
let btn = document.querySelector('.btn');


const superLooop = () => {
    if (inputNumber.value == 0) {
        error.innerHTML = 'ERROR';
        return;
    } else if (inputNumber.value < 0) {
        alert('Bitte gib eine Zahl ein, die größer ist als 0. Deine eingegeben Zahl ist leider kleiner als 0');
        return;
    }
    let text = 'L';
    for (let i = 0; i < inputNumber.value; i++) {
        if (inputNumber.value % 2 == 0 || i % 2 == 0) {
            text += 'o';
        } else {
            text += 0;
        }
    }
    text += 'p';
    result.innerHTML = text;
    error.innerHTML = '';
    console.log(inputNumber.value);
};

btn.addEventListener('click', () => superLooop());