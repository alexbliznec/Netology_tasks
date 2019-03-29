'use strict'

// Домашнее задание 9 обертки для примитивов

function showSpecialPrice() {
  
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

//Задача 1

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

function fixAmount (amount){
  if (typeof amount.amount == 'number' ){
    let result = amount.amount * amount.price;
    return result;
  }else{
    let amountFirstElement = parseFloat(amount.amount.replace(',','.').trim().split(' ').splice(0,1).join());
    if(isNaN(amountFirstElement)){
      let result = -1;
      return result;
    }else{
      let result = amount.price * amountFirstElement;
      return result;
    }
  }
}
for (let order in orders){
  console.log(`Заказ на сумму: ${fixAmount(orders[order])}Q`);
}

//console.log(`Заказ на сумму : ${fixAmount(orders[0])}Q`); 


//Задача 2 

const secretPassword = 'r2d2';

function handleKey (char){
  let key = char.split('').splice(-4).join('').toLowerCase();
  if(key == secretPassword){
    showSpecialPrice();
  }
}
handleKey ('aseer2D2');

//Задача 3 

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

const dataKey = ['id', 'name', 'amount', 'price'];

const dataArray = [];
for ( let item in data){
  let result = dataArray.push(data[item].split(','));
}
const resultArray = [];
const dataObj = {};

function parseData (cellName, data){
  
  for(let item in cellName){
    dataObj[cellName[item]] = data[item]
  
  }
  resultArray.push(dataObj);
  
}
parseData(dataKey, dataArray[0]);
parseData(dataKey, dataArray[1]);
console.log(resultArray);


