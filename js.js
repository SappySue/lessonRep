const book = document.querySelectorAll('.book');
const books = document.querySelector('.books')
const links = document.querySelectorAll('a');
const adv = document.querySelector('.adv');


books.prepend(book[1],book[0],book[4],book[3],book[5],book[2])

document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")'

for (let i = 0; i < links.length; i++) {
    if (links[i].innerText === 'Книга 3. this и Пропопипы Объектов') {
        links[i].innerText = 'Книга 3. this и Прототипы Объектов';
    }
}

adv.style.display = 'none';

book[2].querySelector('li:nth-child(9)').insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>')






