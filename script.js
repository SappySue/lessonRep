let title = "Проект 1";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 20;
let rollback = Math.floor(Math.random() * 100);
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

console.log(screens.toLocaleLowerCase().split());

console.log(Math.floor(((fullPrice * (rollback/100)) / fullPrice) * 100) + " %");