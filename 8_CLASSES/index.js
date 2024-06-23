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
// 3 - Campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - This
class Truck {
    constructor(model, hp) {
        this.model = model,
            this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} de cavalos de potência.`);
    }
}
const volvo = new Truck("Volvo", 400);
console.log(volvo);
volvo.showDetails();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return this.name + " " + this.surname;
    }
}
const muriloSantos = new Person("Murilo", "Santos");
console.log(muriloSantos.name);
console.log(muriloSantos.fullname);
// 8 - Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso.");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso.");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 20;
console.log(myCoords);
console.log(myCoords.getCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é : ${this.title}`;
    }
}
const newTitle = new BlogPost("Deus é maravilhoso!");
console.log(newTitle.title);
console.log(newTitle.itemTitle());
// 10 - Override de métodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12 - Protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Este método é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Este método é privado!");
    }
    showPrivateMethod() {
        return this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//     mtMethod() {
//         this.privateMethod()
//     }
// }
// 14 - Static Members
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem);
// 16 - Parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Preço total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - Class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const person = new myClass("Murilo");
console.log(person);
// 18 - Abstract class
class AbstractClass {
}
// const newObj = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObjetc = new AbstractExample("Murilo");
console.log(newAbstractObjetc);
newAbstractObjetc.showName();
// 19 - Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
