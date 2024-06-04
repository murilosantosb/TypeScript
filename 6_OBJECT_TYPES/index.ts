// 1 - tipo de objeto para função com interface
interface InfoUser {
    name: string,
    age: number,
    isWorking: boolean
}

function person(user : InfoUser) {
    if(user.isWorking === true){
        console.log(`O usuário ${user.name} está trabalhando`)
    }else{
        console.log(`O usuário ${user.name} com ${user.age} anos não está trabalhando`)
    }
}

person({name: "Murilo", age: 17, isWorking: true})
person({name: "Ana", age: 20, isWorking: false})

// 2 - Propriedade opcional em interface
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    if(user.role) {
        console.log(`O usuário é ${user.role}`)
    }else{
        console.log(`O email do usuário ${user.email}`)
    }
}

showUserDetails({email: "murilo@gmail.com", role: "Admin"})
showUserDetails({email: "bob@gmail.com"})

// 3 - Readonly 
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "BMW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - Index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// 5 - Extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
} 

const murilo: Human = {
    name: "Murilo",
    age: 17
}

const bob: SuperHuman = {
    name: "Bob",
    age: 9,
    superpowers: ["Esfomeado", "Conquistador","Ladrãozinho"]
}

console.log(murilo)
console.log(bob)

// 6 - Intersection types
interface Character {
    name: string   
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

// 7 - Readonly array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "banana"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item, index) => {
    console.log(`Fruta ${index} = ${item}`)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - Tuplas
type fiveNumbers = [number, number, number, string, number]

const myNumberArray: fiveNumbers = [1,2,3,"4",5]
console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Murilo", 17]

console.log(anotherUser[0])

anotherUser[0] = "Bob"

console.log(anotherUser[0])

// 9 - Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([15,18])

// Desafios
// 1 

function convertingObjectToPairs(obj: Record<string , any>): [string, any][]{
    return Object.entries(obj)
}

const axampleObject = { a:1, b:2, c:3 }
const pairs = convertingObjectToPairs(axampleObject)
console.log(pairs)

// 2 
function stringInversion(word: string){
    let wordSplit = word.split("")

    let wordReverse = wordSplit.reverse()

    let joinWord = wordReverse.join()

    console.log(joinWord)
}

stringInversion("Hello")

// 3 
function reduceArray(numbers: number[]){
    let some = numbers.reduce((ant,pos) => ant + pos)
    console.log(some)
}

reduceArray([15,20,30,40,50,60,70])