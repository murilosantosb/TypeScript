// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet()

// 2 - import de variavel
import { x } from './variable.js'

console.log(x)

// 3 - Multiplas importações
import { a, b, c, greet } from './multiple.js'

console.log(a)

greet()

// 4 - Alias
import { someName as name } from "./changeName.js"

console.log(name)

// 5 - Import all
import * as myNumbers from './numbers.js'

console.log(myNumbers)

// 6 - Importando tipos
import { Human } from "./myType.js"

class User implements Human {
    name
    age
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const murilo = new User("Murilo", 18)

console.log(murilo)