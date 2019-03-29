'use strict'

// Домашнее задание 7 Дата и время, математические функции и JSON

let positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

//Задача 1
let result = {};
function lotCalculator (item, orderQuantity){
  let lotsQuantity = Math.ceil(orderQuantity/item.producer.lot);
  let totalSumm = item.price * (lotsQuantity * item.producer.lot);
  
  result.lots = lotsQuantity;
  result.summ = totalSumm
  return result;
  // console.log(`${item.title}, ${orderQuantity}, заказать партий ${result.lots}, стоимость ${result.summ}`)
}

lotCalculator(positions[0],4);
console.log(result);
console.log(`${positions[0].title}, ${4}, заказать партий ${result.lots}, стоимость ${result.summ}`)


console.log('-------------------------------------');
//Задача 2

const deferPayments = [];

function deferPay (supplier, amount, date){
  let deferPeriodMilliSec = supplier.producer.deferPeriod * (24*60*60*1000);
  let shipmentDate = new Date(date);
  let shipmentDateMilliSec = Date.parse(shipmentDate);
  let paymentDateMilliSec = shipmentDateMilliSec + deferPeriodMilliSec;
  let paymentDate = new Date(paymentDateMilliSec).toLocaleDateString('ru-RU');
  let paymentsNewObj = {};
  paymentsNewObj.producer = supplier.title;
  paymentsNewObj.amount = amount;
  paymentsNewObj.paymentDate = paymentDate;
  deferPayments.push(paymentsNewObj);
}
deferPay(positions[1], 7200, new Date(2030, 3, 10))
console.log(deferPayments[0].paymentDate, deferPayments[0].producer, deferPayments[0].amount);

console.log('-------------------------------------');
//Задача 3 

function loadCurrencyJSON() {
 return `{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,
    "BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,
    "CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,
    "ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,
    "CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}`
  
}

const newCurrencyObj = JSON.parse(loadCurrencyJSON());

function convertCurrency(amount, from, to){
  if(from in newCurrencyObj && to in newCurrencyObj){
    let qAmount = amount * newCurrencyObj[from];

    let toAmount = qAmount/newCurrencyObj[to];

    let result = parseFloat(toAmount.toFixed(2));
    return result;
  }
  else{
    return `Валюта указана неверно`
  }
}
convertCurrency(1000, "UAH", "EUR");






































