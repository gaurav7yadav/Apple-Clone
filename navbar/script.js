let btn = document.querySelector('.btn');
btn.addEventListener('click', showMenu);

let l1 = document.querySelector('.line1');
let l2 = document.querySelector('.line2');

let menu = document.querySelector('.menu');
let btnBox = document.querySelector('.btnbox');
let listItem = document.querySelector('.listItem');
let body = document.querySelector('.body');

function showMenu() {

    l1.classList.toggle('line1Rotate');
    l2.classList.toggle('line2Rotate');

    menu.classList.toggle('toggleMenu');
    btnBox.classList.toggle('blackBG');
    body.classList.toggle('overFlowBody');
    listItem.classList.toggle('toggleListItem');
}