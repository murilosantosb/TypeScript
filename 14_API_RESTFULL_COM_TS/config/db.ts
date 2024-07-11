import mongoose from "mongoose"

// Logger
import Logger from "./logger"

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
      const dbConn = await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.c4t7bzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      )  
      Logger.info("Conectou ao banco!")
      return dbConn
    } catch (error) {
        Logger.error(error)
        process.exit(1)
    }
}

conn()

module.exports = conn