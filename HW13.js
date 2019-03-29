'use strict'

// Домашнее задание 13 (Создание конструктора и прототипа)

function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  { title: 'Темная сторона Луны', coords: [500, 200, 97] },
  { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
  { title: 'Саратов', coords: [30, 91, 77] }
];

// Задача 1 

function OrdersTeleportationPoint (title, x, y, z){
  //const point = Object.create(OrdersTeleportationPoint.prototype);
  this.title = title;
  this.x = x;
  this.y = y;
  this.z = z;
  this.showCoordinate = function (){
    console.log(`это X -- ${x}, это Y -- ${y}, это Z -- ${z}`)
    }
  }

OrdersTeleportationPoint.prototype = {
  getDistance(x1, y1, z1){
    let result = Math.sqrt(((x1 - this.x)*(x1 - this.x)) + ((y1 - this.y)*(y1 - this.y)) + ((z1 - this.z)*(z1 - this.z)));
    //console.log(result);
    return result;
  }
}


  const newPoint = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
newPoint.showCoordinate();
  let distance = newPoint.getDistance(15, 200, 33);
 console.log(`Расстояние до пункта «${newPoint.title}» составит ${distance.toFixed(0)} единиц`);
  
  
  console.log('--------------------------------------------');
// Задача 2 



const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));


function OrdersTeleportationPointLocator (pointsArr){
  const distancesArr = [];
  this.getClosest = function (x2, y2, z2){
    pointsArr.forEach(function(item, i){
    pointsArr[i].distanceToTeleportationPoint = item.getDistance(x2, y2, z2);
    let res = distancesArr.push(pointsArr[i].distanceToTeleportationPoint);

    //console.log(`массив расстояний ${distancesArr}`);
   
   });
   return function(){
     for (let i in pointsArr){
       if (pointsArr[i].distanceToTeleportationPoint == Math.min(...distancesArr)){
         return pointsArr[i];
       }
     }
   };
  };
}

const locator = new OrdersTeleportationPointLocator(points);
//console.log(locator);
const closestPoint = locator.getClosest(333, 294, 77);
console.log(`ближайший пункт телепортации ${closestPoint().title}`);

console.log('--------------------------------------------');

// Задача 3 

class Loyaltycard {
    constructor (name, order) {
        this.order = order;
        this.owner = name;
        this.id = generateId();
        this._balance = order
        
        Object.defineProperties(this, {
          id: {writable: false},
          owner: {writable: false}
        }
        
        );
    }
    get balance () {
      return this._balance;
    };
    get discount () {
        if (this.balance >= 0 && this.balance < 3000) {
            return 0; 
        };
        if (this.balance >= 3000 && this.balance < 5000) {
            return 0.03; 
        };
        if (this.balance >= 5000 && this.balance < 10000) {
            return 0.05; 
        };
        if (this.balance >= 10000) {
            return 0.07; 
        };
        
    };
    getFinalSum (order) {
        return order - (order * this.discount);
    };
    append (order) {
      this._balance += order;
    };
    show () {
        console.log(`
        сумма заказа -- ${this.order}
        сумма заказа со скидкой -- ${this.getFinalSum(this.order)}
        баланс карты -- ${this.balance}
        текущая скидка -- ${this.discount}
        карта -- ${this.id}
        `)
    }

}
  
const test = new Loyaltycard ('петр иванович', 3000);
  
//console.log(test);
//console.log(test.id);
test.show();
console.log(`~~~~~~~~~~~~~~~~`);
test.append(5000);
test.show();

  
  
  
  
  
  
  
  
  