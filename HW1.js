//переменные, числа, строки

'use strict'

//Task 1
let model;
let price;


//Task 2
model = `Телепорт бытовой VZHIH-101`;
price = 10000;
const currency = `Q`;
console.log(`в наличии имеется ${model} \n цена ${price} ${currency}`);


//Task 3
let order_quantity = 2;
let discount = 0.1;
let order_summ;
let discount_summ = price * discount;

order_summ = (order_quantity > 1) ? console.log(`при покупке ${order_quantity} единиц \n цена покупки составит: ${(price - discount_summ) * order_quantity} ${currency}`) : 
console.log(`цена покупки составит: ${price} ${currency}`);



//Task 4
let account = 52334224;
let wholesale_price = 6500;
let money_left = account % wholesale_price;
let max_quantity = (account/wholesale_price);

console.log(`мы можем закупить ${parseInt(max_quantity)} единиц товара, \n после покупки на счету компании останется ${money_left} ${currency}`);