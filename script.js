// let age = prompt('Сколько тебе лет?', 1);
// alert(`Тебе ${age} лет!`);

const title = document.getElementById('title');
const button = document.querySelector('#button');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const body = document.getElementsByTagName('body');
const main = document.getElementsByTagName('main');
const modalContent = document.getElementById('modalContent');
const headerMenuIcon = document.getElementById('headerMenuIcon');
const headerMenu = document.getElementById('headerMenu')

// button.onclick = function() {
//     title.style.color = 'red';
// };

// title.onclick = function() {
//     title.style.color = 'black';
// };

function revealForm() {
    modalContent.style.opacity = '1';
};

function closeForm() {
    modal.style.display = '';  
};

button.onclick = function() {
    modal.style.display = 'block';
    setTimeout(revealForm, 100);
    body[0].style.overflow = 'hidden';
};

close.onclick = function() {
    modalContent.style.opacity = '0';
    setTimeout(closeForm, 1000);
    body[0].style.overflow = '';
};





headerMenuIcon.onclick = function() {
    headerMenu.style.display = 'block';
};

main[0].onmouseenter = function() {
    headerMenu.style.display = '';
};