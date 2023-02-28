let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = Math.floor(Math.random() * 100);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100)); 

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLocaleLowerCase().split());
console.log(Math.floor(((fullPrice * (rollback/100)) / fullPrice) * 100) + " %");

// Урок 3 

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

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " рублей" );