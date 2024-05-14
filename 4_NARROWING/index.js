"use strict";
// 1 - Type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível fazer essa operação, tente novamente.");
    }
}
sum(15, 207);
// sum("15",80)
// 2 - Checando se valor existe
function operations(arr, operation) {
    if (operation === "sum") {
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
    }
    else if (operation === "mult") {
        const mult = arr.reduce((i, total) => i * total);
        console.log(mult);
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3, 5], "sum");
operations([50, 10, 2, 3], "mult");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é viralata");
    }
}
showDogDetails(turca);
showDogDetails(bob);
function userAnalysis(name, review) {
    if (typeof review === "boolean") {
        console.log(`O usuário ${name} não deixou sua avaliação.`);
    }
    else {
        console.log(`O usuário ${name} avaliou com ${review}⭐ estrelas`);
    }
}
userAnalysis("Ana", false);
userAnalysis("Murilo", 5);
