require("dotenv").config()

import express from 'express'
import router from './router'

const app = express()

let PORT = process.env.PORT



// JSON middleware
app.use(express.json())

// DB connection
require("../config/db")

// Logger
import Logger from '../config/logger'

// Middlewares
import morganMiddleware from './middleware/morganMiddleware'

app.use(morganMiddleware)

app.use("/api/" ,router)



app.listen(PORT, async () => {
    Logger.info(`Aplicação está funcionando na porta: ${PORT}`)
})