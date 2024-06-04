"use strict";
// 1 - Campos em classes
class User {
}
const murilo = new User();
console.log(murilo);
murilo.name = "Murilo";
console.log(murilo);
// 2 - Constructor
class NewUser {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
