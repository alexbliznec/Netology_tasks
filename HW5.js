'use strict'
// Домашнее задание Замыкания и область видимости

//Задача 1
const tax = 0.73;
let sum = 0;
const countTax = function () {

    return function (price) {
        sum += price;
        let taxSum = sum * tax;
        console.log(`налог с продаж ${tax * 100}%, к оплате ${taxSum}`)
        return taxSum;
    }
}
countTax()(100);
//console.log(`налог с продаж ${tax * 100}%, к оплате ${taxSumm}`);
countTax()(200);
//console.log(`налог с продаж ${tax * 100}%, к оплате ${taxSumm}`);
countTax()(300);
//console.log(`налог с продаж ${tax * 100}%, к оплате ${taxSumm}`);

//Задача 2

let totalPackage = 300;
function canPackage (a, b, c){
  let packageNeed = ((a*a)+(b*b)+(c*c)*2);
  console.log(packageNeed + '++++++++++++++++++');
    if (packageNeed > totalPackage) {
        console.log(`заказ ${a}/${b}/${c} не упакован, недостаточно упаковочной бумаги, необходимо- ${packageNeed}, осталось- ${totalPackage}`);
        return false;
    } else {
        totalPackage -= packageNeed;
        console.log(`заказ ${a}/${b}/${c} упакован, упаковочной бумаги осталось ${totalPackage}`);
        return true;
    }

}
canPackage(1,2,1);
canPackage(2,4,3);
canPackage(50,12,24);


console.log('----------------------------------------');

// Задача 3

const teleportsCharge = [ 7, 2, 1, 4, 8 ];
const testArr = [];
for (let i = 0; i <= teleportsCharge.length; ++i){
  testArr[i] = function (){
    if (teleportsCharge[i] <= 1){
      console.log(`Телепорт разряжен`);
    }else{
      console.log(`Телепорт использован, заряд = ${--teleportsCharge[i]}`);
    }
  }
}
 testArr[0]();
 testArr[0]();
 testArr[0]();
 testArr[0]();
 testArr[0]();
 testArr[0]();
 testArr[0]();
 testArr[0]();
 console.log(`+++++++++++++++++++++++`);
console.log(teleportsCharge);
