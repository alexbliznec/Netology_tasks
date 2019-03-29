// Домашнее задание 10 Прототип и конструктор функции


'use strict'

const items = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    available: 7,
    holded: 0
  },
  {
    title: 'Ховерборд Mattel 2016',
    available: 4,
    holded: 5
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    available: 1,
    holded: 1
  }
];

//Задача 1 

const itemPrototype = {
  sell(field, amount = 1) {
    if (this[field] < amount) {
      throw `Недостаточно товара для продажи (${this[field]} из ${amount})`
    }

    this[field] -= amount;
    return true;
  },
  sellHolded(amount = 1) {
    return itemPrototype.sell.call(this, 'holded', amount);
  },
  sellAvailable(amount = 1) {
    return itemPrototype.sell.call(this, 'available', amount);
  }
};
  

function sellItem (item, amount, isHolded = false){
  if (isHolded){
    itemPrototype.sellHolded.call(item, amount);
  }else{
    itemPrototype.sellAvailable.call(item, amount);
  }
  
}
sellItem(items[1], 2);
console.log(items);
console.log('--------------------------')


//Задача 2 


function formatFull() {
  return `${this.title}:\n\tдоступно ${this.available} шт.\n\tв резерве ${this.holded} шт.`;
}

function formatLite() {
  return `${this.title} (${this.available} + ${this.holded})`;
}

function show(format) {
  console.log(format());
}

const showItems = function (list, formatter) {
    for (let i of list) {
        show(formatter.bind(i));
    }
}
showItems(items, formatLite);

console.log('--------------------------');
// Задача 3 

function createButton(title, onclick) {
  
  return {
    title,
    onclick,
    click() {
      this.onclick.call(this);
    }
  };
}

const createBuyButtons = function(list) {
    let buttons = [];
    list.forEach(element => {
        buttons.push(createButton.call(element, 'купить', onclick.bind(element)));
    });
    return buttons;
}

const onclick = function () {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(this.title);
}

const buttons = createBuyButtons(items);
buttons[0].click();
buttons[1].click();
buttons[2].click();



