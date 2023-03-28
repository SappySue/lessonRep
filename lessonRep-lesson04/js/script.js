'use strict'

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
  },
  thisString: function(str){
    return typeof str == 'string' && isNaN(str) && !(str.startsWith(' ') || str.endsWith(' '));
  },
  asking: function () {

    do {
      appData.title = prompt('Как называется ваш проект?',"Калькулятор верстки");
    } while (!appData.thisString(appData.title));
 

    for (let i = 0; i < 2; i++){
      let name = '';
      let price = 0

      do {
        name = prompt('Какие типы экранов нужно разработать?')
      } while (!appData.thisString(name));

      do {
        price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price)) 

      appData.screens.push({id: i, name: name, price: price})
    }

    for (let i = 0; i < 2; i++){
      let name = '';
      let price = 0

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (!appData.thisString(name))
 
      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price)) 
      
      appData.services[name] = +price
    } 


    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  addPrice: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }  
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  getRollbackMessage: function(price) {
    if ( price >= 30000 ) {
      return "Даем скидку в 10%"
    } else if ( price >= 15000 && price < 30000 ) {
      return "Даем скидку в 5%"
    } else if ( price >= 0 && price < 15000 ) {
      return "Скидка не предусмотрена"
    } else {
      return "Что то пошло не так"
    }
  },
  getServicePercentPrices: function() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
  },
  logger: function() {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    },

  start: function() {
    appData.asking()
    appData.addPrice()
    appData.getTitle();
    appData.getFullPrice();
    appData.getServicePercentPrices();

    appData.logger();
  }
}

appData.start();



const title = document.getElementsByTagName('h1')[0],
      buttons = document.getElementsByClassName('handler_btn')[0],
      plus = document.querySelector('.screen-btn'),
      itemsWithPercent = document.querySelectorAll('.other-items.percent'),
      itemsWithNumber = document.querySelectorAll('.other-items.number'),
      inputRange = document.querySelector('.rollback input[type="range"]'),
      spanRange = document.querySelector('.rollback .range-value'),
      totalInputs = document.getElementsByClassName('total-input');

let screenEl = document.querySelectorAll('.screen');


console.log(title);
console.log(buttons);
console.log(plus);
console.log(itemsWithPercent);
console.log(itemsWithNumber);
console.log(inputRange);
console.log(spanRange);
console.log(totalInputs);
console.log(totalInputs[0],totalInputs[1],totalInputs[2],totalInputs[3],totalInputs[4]);










