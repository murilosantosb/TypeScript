"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
// 2 - Constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Murilo",
    age: 18,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "hasDriveLicense"));
// 6 - Typeof type operator
const userName = "Murilo";
const userNameTwo = "Bob";
const userNameFour = "Joaquim";
console.log(typeof userName);
console.log(typeof userNameTwo);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const somerVar = 5;
const testing = "some text";
