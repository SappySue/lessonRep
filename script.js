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

// Урок 3 

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?');
screenPrice = +prompt('Сколько будет стоить данная работа?');
adaptive = prompt('Нужен ли адаптив на сайте?');

if (adaptive == 'да' || adaptive == 'Да') {
  adaptive = true;
} else {
  adaptive = false;

}

console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = (screenPrice + servicePrice1 + servicePrice2);


let servicePercentPrice = (Math.ceil(fullPrice - rollback)); 
console.log(servicePercentPrice);

if ( fullPrice > 30000 ) 
{
  console.log("Даем скидку в 10%");
} 
else if ( fullPrice > 15000 || fullPrice < 30000 ) 
{
  console.log("Даем скидку в 5%");
}
else if ( fullPrice > 15000 || fullPrice > 0 )
{
  console.log("Скидка не предусмотрена");
}
else if ( fullPrice < 0 )
{
  console.log("Что то пошло не так");
}

console.log();