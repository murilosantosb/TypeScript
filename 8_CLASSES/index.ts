// 1 - Campos em classes
class User {
    name!: string
    age!: number
}


const murilo = new User()
console.log(murilo)

murilo.name = "Murilo"
console.log(murilo)

// 2 - Constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age
    }
}

const joao = new NewUser("João", 22)
console.log(joao)