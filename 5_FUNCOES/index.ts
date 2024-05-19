// 1 - void
function withoutReturn():void {
    console.log("Está função não tem retorno!")
    // return 5
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName:string) {

    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Murilo")
preGreeting(greeting, "Bob")

// 3 - Generic function
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["a","b","c",1]))
// console.log(firstElement("dsds"))

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

console.log(mergeObjects({nome:"Murilo"},{age: 17}))

// 4 - Contraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b){
        biggest = a
    }else{
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(12,10))

// 5 - Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3],[4,5,6,7]))
console.log(mergeArrays<number | string>([1,2,3], ["teste","teste"]))

// 6 - Parametros opcionais 
function modernGreeting(name: string, greet?: string) {

    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Murilo"))
console.log(modernGreeting("Pedro", "Dr."))

// 7 - parametro default
function somaDefault(n: number, m = 10): number {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(20,50))

// 8 - Unknown
function doSomething(x: unknown) {
    if(typeof x === "string") {
        console.log(x)
    }else{
        console.log("Tipo não é uma string")
    }
}

doSomething("18")
doSomething(15)

// 9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

// showErrorMessage("Algum erro!")

// 10 - Rest operator
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5,6))
console.log(sumAll(525,262,12612,12))
// console.log(sumAll("teste"))

// 11 - Destructuring 
function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt))
// console.log(showProductDetails({name: "teste", age: 30}))
// console.log(showProductDetails([1,2]))

