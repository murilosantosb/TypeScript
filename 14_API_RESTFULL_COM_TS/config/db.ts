import mongoose from "mongoose"

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
      const dbConn = await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.c4t7bzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      )  
      console.log("Conectou ao banco!")
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn