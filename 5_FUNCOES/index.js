"use strict";
// 1 - void
function withoutReturn() {
    console.log("Está função não tem retorno!");
    // return 5
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Murilo");
preGreeting(greeting, "Bob");
// 3 - Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c", 1]));
// console.log(firstElement("dsds"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
console.log(mergeObjects({ nome: "Murilo" }, { age: 17 }));
// 4 - Contraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(12, 10));
// 5 - Especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6, 7]));
console.log(mergeArrays([1, 2, 3], ["teste", "teste"]));
// 6 - Parametros opcionais 
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Murilo"));
console.log(modernGreeting("Pedro", "Dr."));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(20, 50));
// 8 - Unknown
function doSomething(x) {
    if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("Tipo não é uma string");
    }
}
doSomething("18");
doSomething(15);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro!")
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 6));
console.log(sumAll(525, 262, 12612, 12));
// console.log(sumAll("teste"))
// 11 - Destructuring 
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
// console.log(showProductDetails({name: "teste", age: 30}))
// console.log(showProductDetails([1,2]))
