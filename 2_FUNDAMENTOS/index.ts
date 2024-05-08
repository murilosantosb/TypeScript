// 1 - Numbers
let x: number = 10

console.log(x)

const y:number = 15.81515

console.log(typeof y)

console.log(y)
console.log(y.toPrecision(3))


// 2 - Strings
const firstName: string = "Murilo"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Santos"

fullName = `${firstName} ${lastName}`
console.log(fullName)

// 3 - Booleans
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true
console.log(`a = ${a}`)

// 4 - Inference e Annotation
const ann: string = "Teste"

let inf = "Teste"

// 5 - Desafio 

let num: number = 100

let numberToString = num.toString()

let stringBigger: string = `Número : ${numberToString}`

console.log(stringBigger)
