'use strict'

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
let servicePercentPrice = fullPrice - (fullPrice * (rollback/100)); 

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
  if ( price >= 30000 ) {
    return "Даем скидку в 10%"
  } else if ( price >= 15000 && price < 30000 ) {
    return "Даем скидку в 5%"
  } else if ( price >= 0 && price < 15000 ) {
    return "Скидка не предусмотрена"
  } else {
    return "Что то пошло не так"
  }
}

const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2 
}

function getFullPrice(){
  return screenPrice + getAllServicePrices
}

const getTitle = function(title){
  let res = title[0] == ' ' ? title[1].toUpperCase() + title.slice(2) : title[0].toUpperCase() + title.slice(1);
  return res
}

const getServicePercentPrices = function() {
  return fullPrice - (fullPrice * (rollback / 100));
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens.length);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(fullPrice,rollback));