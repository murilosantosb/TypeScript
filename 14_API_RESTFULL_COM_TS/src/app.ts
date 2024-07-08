require("dotenv").config()

import express from 'express'
import router from './router'

const app = express()

let PORT = process.env.PORT

// JSON middleware
app.use(express.json())

// DB connection
require("../config/db")

app.use("/api/" ,router)

app.listen(PORT, async () => {
    console.log(`Aplicação está funcionando na porta: ${PORT}`)
})