"use strict";
// 1 - Numbers
let x = 10;
console.log(x);
const y = 15.81515;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - Strings
const firstName = "Murilo";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Santos";
fullName = `${firstName} ${lastName}`;
console.log(fullName);
// 3 - Booleans
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(`a = ${a}`);
// 4 - Inference e Annotation
const ann = "Teste";
let inf = "Teste";
// 5 - Desafio 
let num = 100;
let numberToString = num.toString();
let stringBigger = `Número : ${numberToString}`;
console.log(stringBigger);
