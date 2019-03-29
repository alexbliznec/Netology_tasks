'use strict'

// Домашнее задание 8 Прототип и конструктор объекта

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: 'Ховерборд Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    price: 57000,
    discount: 0,
    available: 1
  }
];

//Задача 1

const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  toString() {
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
  }
};
 itemPrototype.unhold = function (amount = 1) {
    if(this.holded < amount){
      console.log(`Здесь у нас доступное количество меньше чем нужно снять с резервации ${this.holded}`)
      return false;
    }
    this.available += amount;
    this.holded -= amount;
    
    return true;
  }

function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(4);
items[2].hold(1);
items[0].unhold(2)
items[1].unhold(12)
items[2].unhold(1)
for (let item of items) {
  console.log(`Товар ${item}`);
}
console.log('--------------------------------------');
//Задача 2 

const config = {
  
    get(){
      return this.price - (this.price * (this.discount/100));
    },
    set(newPrice){
      this.discount = (this.price - this.finalPrice) / this.price * 100;
    },
    configurable : true,
    enumerable : true
  };

for (let i in positions){
  Object.defineProperty (positions[i], "finalPrice",config);
}
console.log(positions[1].finalPrice);
positions[1].finalPrice = 6000;
console.log(positions[1].finalPrice);
console.log(positions[1].discount);

//Задача 3
 
const requiredFields = ['title', 'price', 'discount'];

let form1 = {
  title : 'Посох мастера Йоды',
  price : 1000000000000000000,
  discount : 6
  };
let form2 = {
  title : 'Пеппедац модель 1',
  price : 20000,
  discount : 10,
  manufacturer : 'Плюкский пеппелацовский завод'
}

const keyArray = [];

function isValidPosition (form, requiredProperties){
  for (let key in form){
    keyArray.push(key);
  }
  if (keyArray.join(',') == requiredProperties.join(',')){
    return true;
  }else{
    return false;
  }
}



if(isValidPosition(form1, requiredFields)){
  console.log(`форма заполнена верно`)
}else{
  console.log(`форма заполнена не верно`);
}

if(isValidPosition(form2, requiredFields)){
  console.log(`форма заполнена верно`)
}else{
  console.log(`форма заполнена не верно`)
}

 