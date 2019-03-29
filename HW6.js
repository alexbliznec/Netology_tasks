'use strict'
// Домашнее задание 6 Объекты и контекст вызова функции

const positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

const prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

const hitName = positions[2], hitPrice = prices[2];

//Задача 1 

const hit = {};

  hit.name = hitName;
  hit.price = hitPrice;

console.log(`Хит продаж мартобря: \<${hit.name}\> цена ${hit.price}`);
console.log('------------------------------------');
//Задача 2 

const items = [];

for (let i = 0; i < positions.length; i++) {
    items.push({name: positions[i], price: prices[i]});
}
console.log(items);
console.log(`Купите ${items[4].name} по цене ${items[4].price}`);
console.log('------------------------------------');
//Задача 3 



let discount;
function showDiscount(productName, quantity){
  if (quantity <= 10){
    discount = 5;
  }else if (quantity > 10 && quantity <= 50){
    discount = 7;
  }else if (quantity > 50 && quantity <= 100){
    discount = 10; 
  }else if (quantity > 100){
    discount = 15;
  }
  let result = (productName.price * quantity) - ((productName.price * quantity)*(discount/100));
  let benefit = (productName.price * quantity) - result;
 
  console.log(`${productName.name} стоимость партии из ${quantity} шт. составит ${result} (скидка ${discount}%) Ваша выгода ${benefit}`);
 }


showDiscount(items[0], 12);
showDiscount(items[3], 97);



console.log('------------------------------------');
//Задача 4
//console.log(items);
  for (let i in items){
  items[i].amount = 4;
}


function updateAmount(item, quantity = 1){
    if (!item.amount) {
        console.log(`ошибка, у объекта нет остатков`);
        return false;
    } else if (item.amount == 0 || item.amount < quantity) {
        console.log(`${item.name} закончился на складе`);
    } else if (item.amount == quantity) {
        console.log(`Вам повезло! Вы купили последний ${item.name}`);
    } else {
        item.amount -= quantity;
        console.log(`${item.name}, осталось на складе ${item.amount}`);
    }
}

updateAmount(items[0], 5);

updateAmount(items[1], 2);

updateAmount(items[2]);

