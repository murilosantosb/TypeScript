// 1 - Arrays
let numbers: number[]= [1,2,3,4,5,6,7,8,9,10]

numbers.push(5)

console.log(numbers[8])

let strings: string[] = ["Murilo", "Bob"]

console.log(strings)

// 2 - Outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300,400,500)
nums.shift()

console.log(nums)

// 3 - Any

const arr1: any = [1, "teste", true, [] , {nome: "Murilo"}]

console.log(arr1)

// 4 - Parametros tipados

function soma(a: number , b: number) {
    console.log(a + b)
}

soma(30,60)

// 5 - Retorno de função

function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Murilo"))

// 6 - Função anonima :
setTimeout(function() {
    const sallary: number = 1000

    // console.log(parseFloat(sallary))
    console.log(sallary)
}, 2000)

// 7 - Tipos de objeto
function passCoordinates(coord: {x: number , y: number}) {
    console.log("X coordinates: " + coord.x )
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

const pessoaObj: {nome: string, surname: string} = {
    nome: "Murilo",
    surname: "Santos"
}

// 8 - Props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    c ? console.log("C: " + c) : ""
}

showNumbers(1,2,3)
showNumbers(4,5)

// 9 - Validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá ${firstName}, tudo bem?`

}

console.log(advancedGreeting("Murilo", "dos Santos"))
console.log(advancedGreeting("Joaquim"))

// 10 - Union type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, 'Teste', true]
console.log(arr2)

// 11 - Avançando em Union Types
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuário não aprovado"
    }

    return `A função do usuário é : ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - Type Alias
type ID = number | string

function showId(id: ID) {
    console.log(`O ID do Produto é : ${id}`)
}

showId(25)
showId("200")

// 13 - Interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

showCoords({x: 87.5, y:54.7, z: 22.6})

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

console.log(coordObj)

// 14 - Interface x Type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Murilo", age: 17}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - Literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("center")
// showDirection("top")

// 16 - Non null assertion operators
let p = document.querySelector("#some-p")
console.log(p!.innerHTML)

// 17 - Bigint
let n: bigint

// n = 1 

n = 1000n
console.log(n)
console.log("n: " +  typeof n)

// 18 - Symbol
let symbolA: symbol = Symbol("a") //Annotation
let symbolB = Symbol("a") // Inference

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
