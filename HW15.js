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

