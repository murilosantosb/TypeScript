// 1 - Iniciando projeto
// console.log("Express + TS")

//2 - init express
import express, { NextFunction, Request, Response } from 'express'

const app = express()

let PORT = 3000

// 3 - Rota com POST
app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello Express!")
})

// 3 - Rota com POST
app.post("/api/product", (req, res) => {
    
    console.log(req.body)

    return res.send("Produto adicionado!")

})

// 4 - Rota para todos os verbos
app.all("/api/product/check", (req, res) => {

    // req.method = VERBO HTTP

    if(req.method === "POST"){
        return res.send("Inseriu algum registro!")
    }else if(req.method === "GET"){
        return res.send("Leu algum registro!")
    }else{
      return  res.send("Não podemos realizar está operação!")
    }

})

// 5 - Interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
})

// 6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.00,
        color: "Blue",
        sizes: ["P", "M", "G"]
    })
})

// 7 - Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id

    if(id === "1"){
        const product = {
            id: 1,
            name: "Boné",
            price: 10
        }
        return res.status(200).json(product)
    }else {
        return res.send("Produto não encontrado!")
    }
})

// 8 - Rotas complexas
app.get("/api/product/:id/review/:reviewId", (req:Request, res: Response) => {
    console.log(req.params)

    const productId = req.params.id
    const reviewId = req.params.reviewId

    return res.status(200).send(`Acessando a review ${reviewId} do Produto ${productId}`)
})

// 9 - Router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuário com id: ${req.params.id}`)

    return res.status(200).send("O usuário foi encontrado!")
}

app.get("/api/user/:id", getUser)

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if(req.params.id === "1"){
        console.log("Pode seguir!")
        next()
    }else {
        console.log("Acesso negado!")
    }

    // next()
}


app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json({msg: "Bem-vindo a área administrativa!"})
})

// 11 - Middleware para todas as rotas 
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}

app.use(showPath)

// 12 - req e res com generics
app.get(
    "/api/user/:id/details/:name",
    (
        req: Request< {id: string; name: string} >,
        res: Response<{ status: boolean }>
    ) => {
        console.log(`ID: ${req.params.id}`)
        console.log(`Name: ${req.params.name}`)

        return res.json({ status: true })
    }
)

// 13 - Tratando erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
        throw new Error("Algo deu errado!")
    } catch (e: any) {
        res.status(500).json({ msg: e.message })
    }
})

app.listen(PORT, () => {
    console.log("Aplicação de TS + Express funcionado!")
})
