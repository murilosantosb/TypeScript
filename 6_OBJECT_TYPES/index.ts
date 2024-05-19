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