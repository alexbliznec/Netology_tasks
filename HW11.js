'use strict'

// Домашнее задание 11 (Прототип и конструктор массива)

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

//Задача 1 


clients.findByName = function(clientName){
  let result = clients.find(function(element){
    if (element.name === clientName){
      return element;
    }else{
      return undefined
    }
  })
  return result;
}

const test = clients.findByName('Доктор Джон Зоидберг')
console.log(test.email);
console.log(test)

// Задача 2 

function totalSumm (client){
  var result = 0;
  for (let i of client.orders){
    result += i
  }
  return result;
}

totalSumm(clients[0]);


clients.forEach(function(element){
  element.totalSumm = totalSumm(element)
});
//console.log(clients);

function compareByTotalSumm (left, right){
  if (left.totalSumm > right.totalSumm){
    let result = -1;
    return result;
  }else if (left.totalSumm < right.totalSumm){
    let result = 1;
    return result;
  }else{
    let result = 0;
    return result;
  }
}

clients.sort(compareByTotalSumm).forEach(client => console.log(client.name));

//Задача 3 

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}


function getSubscribedEmails (list){
  const emailArr = [];
  for (let i of list){
    if (i.isSubscribed == true){
     emailArr.push(i.email);
    }
  }
  return emailArr;
}

getSubscribedEmails(clients).forEach(sendMail);
















