// 1 -  Exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!")

    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
        ) {

        console.log("Executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class MyClass {
    @myDecorator()
    testing() {
        console.log("Terminado execução do método!")
    }
}

const myObj = new MyClass()

myObj.testing()

// 2 - Multiplos decorators
function a() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou a")
    }
}

function b() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou b")
    }
}

class MultipleDecorators {
    @a()
    @b()

    testing() {
        console.log("Terminado execução!")
    }
}

const multiple = new MultipleDecorators()

multiple.testing()

// 3 - Class decorator
function classDec(constructor: Function) {
    console.log(constructor.name)
    if(constructor.name === "User"){
        console.log("Criando usuário!")
    }
}

@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const murilo = new User("Murilo")
console.log(murilo)

// 4 - Method decorator
function enumerable(value: boolean) {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ){
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(true)
    showName() {
        console.log(this)
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine("Trator")

console.log(trator.showName())

// 5 - Acessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    @enumerable(true)
    get showAge() {
        return `Idade do monstro: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6 - Property decorator
function formatNumber() {
    return function(target: Object, propertKey: string) {

        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}

class ID {
    @formatNumber()
    id 

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)

// 7 - Exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id 
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id 

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(55)

console.log(newBook)
console.log(pen)

console.log(newBook.createdAt)