'use strict'

// Домашнее задание 15 (Символы и итераторы)

// Задача 1 

class BarcodeGenerator {
    constructor (size) {
        this.prefix = this[Symbol.for('prefix')];
        this.size = size;
        this.rand = function () {
            return Math.floor(Math.random() * (9 - 1) + 1);
        };
        BarcodeGenerator.prefix = Symbol.for(this.prefix);
    }
    create () {
        let codeArr = [];
        for (let i = 1; i <= this.size; i++) {
            codeArr.push(this.rand());
        }
        let res = codeArr.join('');
        
        if (this[BarcodeGenerator.prefix]) {
            return `${this[BarcodeGenerator.prefix]} - ${+res}`;
        } else {
            return +res;
        }
    }
}
const test = new BarcodeGenerator(10);
test[BarcodeGenerator.prefix] = 'AA';
console.log(test.create());
console.log(test.create());
test[BarcodeGenerator.prefix] = '';
console.log(test.create());
console.log(test.create());
console.log(test.create());

// Задача 2 

class ArrayIterator {
    constructor (arr) {
        this.arr = arr;
        this.index = 0;
    }
    next () {
        let res = {value: undefined, done: true};
        if (this.index < this.arr.length) {
            res.value = this.arr[this.index];
            res.done = false;
            this.index += 1;
        }
        return res;
    }
}

class HexRange {
    constructor (from, to) {
        this.from = from;
        this.to = to;
        this.array = [];
        while (this.from < this.to) {
            this.array.push(this.from.toString(16));
            this.from += 1;
        }
    }
    [Symbol.iterator] () {
        return new ArrayIterator(this.array);
    }
}

let queue = new HexRange (247, 253);
for (let i of queue) {
    console.log(i);
};

console.log(...queue);

// Задача 3

class DateRange {
    constructor (from, to) {
        this.from = from;
        this.to = to;
        this.array = [];
        while (this.from <= this.to) {
            if (this.from.getDay() !== 0 && this.from.getDay() !== 6) {
                console.log(`заходим в будни`);
                this.array.push(this.from.toLocaleDateString('ru-Ru'));
                this.from.setDate(this.from.getDate() + 1);
            } else {
                console.log(`заходим в выходные`);
                this.from.setDate(this.from.getDate() + 1);
            }

        }
    }
    [Symbol.iterator] () {
        return new ArrayIterator (this.array);
    }
}
const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);

const range = new DateRange (from, to);

for (let day of test) {
    console.log(day);
}