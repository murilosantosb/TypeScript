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
