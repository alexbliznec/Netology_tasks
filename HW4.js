'use strict'
// Домашнее задание 4 (функции)

//task 1
const moonPrice = 150;
const crabNebulaPrice = 250;
const andromedaPrice = 550;
const orionNebulaPrice = 600;
const deathStarPrice = 'Цена договорная';

function guaranteePrice (years = 0){
    let price;
    switch (years) {
        case 0:
        price = 0;
        break;
        case 1:
        price = 1250;
        break;
        case 2:
        price = 2300;
    }
    return price;
}
  function engravingCount(textString = ''){
      let engravingPrice = 0;
      if (!textString) {
        return engravingPrice;
      }
      let letters = 0;
      textString.split(' ').forEach(element => {letters = letters + element.length});
      engravingPrice = letters * 11
      return engravingPrice;
}
function countDelivery(deliveryNeeded = false, deliveryPoint = ''){
    let price = 0;
    if (deliveryNeeded && deliveryPoint) {
        switch (deliveryPoint) {
            case 'moon': price = moonPrice;
            break;
            case 'crab nebula': price = crabNebulaPrice;
            break;
            case 'andromeda': price = andromedaPrice;
            break;
            case 'orion nebula': price = orionNebulaPrice;
            break;
            case 'death Star': price = deathStarPrice;
            break;
            default: price = 'Nan'; 
        }
    }
    return price;
}



function finalcount(guaranteeYears, engravingText, deliveryPlace, deliveryNeeded){
    let finalPrice = guaranteePrice(guaranteeYears) + engravingCount(engravingText) + countDelivery(deliveryNeeded, deliveryPlace);
   
    let res = console.log(`Общая стоимость заказа ${finalPrice}
    гарантийное обслуживание ${guaranteePrice(guaranteeYears)}
    гравировка ${engravingCount(engravingText)}
    доставка в область ${deliveryPlace} ${countDelivery(deliveryNeeded, deliveryPlace)}`);
    return res;
};

finalcount(2, 'text', 'moon', true);

