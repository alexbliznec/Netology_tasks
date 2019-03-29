//Домашняя работа 2 (Управляющие контсрукции)

'use strict'

//Задача 1

const warehouseQuantity = 10000;

const orderQuantity = 10000;

if (orderQuantity > warehouseQuantity){
	console.log('Такого количества товара на складе нет!');
} else if (orderQuantity === warehouseQuantity){
	console.log('Вы забираете весь товар со склада!');
} else {
	console.log('Заказ оформлен');
};

//Задача 2

/*var moonPrice = 150;
var crabNebulaPrice = 250;
var andromedaPrice = 550;
var orionNebulaPrice = 600;
var deathStarPrice = 'Цена договорная';
*/

let deliveryCost;
const deliveryPlace = 'Крабовидная Туманность'
switch (deliveryPlace){
	case 'Луна':
	deliveryCost = 150;  
	  console.log(`Цена доставки составит: ${deliveryCost} Q`);
  break
	case 'Крабовидная Туманность':
	deliveryCost = 250;
	  console.log(`Цена доставки в Крабовидную Туманность составит: ${deliveryCost} Q`);
  break	
	case 'Туманность Андромеды':
	deliveryCost = 550;
	  console.log(`Цена доставки в Туманность Андромеды составит: ${deliveryCost} Q`);
  break
	case 'Туманность Ориона':
	deliveryCost = 600;
	console.log(`Цена доставки в Туманность Ориона составит: ${deliveryCost} Q`);
  break	
	case 'Звезда Смерти':
	deliveryCost = 'Цена договорная'
	console.log(`Цена доставки на звезду Смерти составит: ${deliveryCost}`);
  break
    default:
    console.log(`В Ваш Квадрант доставка не осуществляется`);
}


//Задача 3

const goodsPrice = 12;

try{
  if (typeof(goodsPrice) !== 'number'){
  throw `Вы допустили ошибку: \"${goodsPrice}\" не может быть строкой`
}
  console.log('цена введена корректно');

} catch (e) {
  console.log(e);
}
//Задача 4

const yourPlanet = 'Земля';
const age = 18;

switch (yourPlanet){
  case 'Земля':
    (age >= 18) ? console.log('Продолжайте покупки') : console.log('Вы не достигли совершеннолетия');
    break
  case 'Юпитер':
    (age >= 120) ? console.log('Чистого неба и удачных покупок') : console.log('Сожалеем, возвращайтесь, когда Вам стукнет 120');
    break
    default:
    console.log('Спасибо, что пользуетесь услугами магазина.');
}
