// 1 
// Target é a Função/Class por exemplo : class Example

function log() {
    return function(target: any, propertKey: string) {
        console.log(target, propertKey)
    }
}

// @log()
class Example {

}


// 2

function setApiVersion (apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setApiVersion("v1.0.0.1")
class API {}

@setApiVersion("v1.0.1")
class WebHook {}

console.log(new API)
console.log(new WebHook)

// 3 - Decorador de Propriedade
function minLength (length: number) {
    return (target: any, propertKey: string) => {
            let val = target[propertKey]
        
            const getter = () => val

            const setter = (value: string) => {
                if(value.length < length) {
                    throw new Error(`Value for ${propertKey} need more then ${length}`)
                }

                val = value
            }

        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        })
    }

}


class Category {
    @minLength(2)
    title: string

    constructor (t: string) {
        this.title = t
    }

    setTitle(newTitle: string) {
        this.title = newTitle
    }
    
}

const category01 = new Category("1511551151")

try {
    category01.setTitle("2255")
} catch (error) {
    console.error(error)
}

