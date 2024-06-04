"use strict";
function person(user) {
    if (user.isWorking === true) {
        console.log(`O usuário ${user.name} está trabalhando`);
    }
    else {
        console.log(`O usuário ${user.name} com ${user.age} anos não está trabalhando`);
    }
}
person({ name: "Murilo", age: 17, isWorking: true });
person({ name: "Ana", age: 20, isWorking: false });
function showUserDetails(user) {
    if (user.role) {
        console.log(`O usuário é ${user.role}`);
    }
    else {
        console.log(`O email do usuário ${user.email}`);
    }
}
showUserDetails({ email: "murilo@gmail.com", role: "Admin" });
showUserDetails({ email: "bob@gmail.com" });
const fusca = {
    brand: "BMW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const murilo = {
    name: "Murilo",
    age: 17
};
const bob = {
    name: "Bob",
    age: 9,
    superpowers: ["Esfomeado", "Conquistador", "Ladrãozinho"]
};
console.log(murilo);
console.log(bob);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - Readonly array
let myArray = ["Maçã", "Laranja", "banana"];
// myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((item, index) => {
    console.log(`Fruta ${index} = ${item}`);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, "4", 5];
console.log(myNumberArray);
const anotherUser = ["Murilo", 17];
console.log(anotherUser[0]);
anotherUser[0] = "Bob";
console.log(anotherUser[0]);
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([15, 18]);
// Desafios
// 1 
function convertingObjectToPairs(obj) {
    return Object.entries(obj);
}
const axampleObject = { a: 1, b: 2, c: 3 };
const pairs = convertingObjectToPairs(axampleObject);
console.log(pairs);
// 2 
function stringInversion(word) {
    let wordSplit = word.split("");
    let wordReverse = wordSplit.reverse();
    let joinWord = wordReverse.join();
    console.log(joinWord);
}
stringInversion("Hello");
// 3 
function reduceArray(numbers) {
    let some = numbers.reduce((ant, pos) => ant + pos);
    console.log(some);
}
reduceArray([15, 20, 30, 40, 50, 60, 70]);
