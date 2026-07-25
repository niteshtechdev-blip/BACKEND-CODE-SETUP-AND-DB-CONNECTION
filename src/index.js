import dotenv from "dotenv"
import { connectDB } from "./db/db_connection.js"
import { WebServer } from "./configrations.js"
dotenv.config({
    path:'./env'
})

connectDB()
WebServer.listen(`${process.env.PORT}`,()=>{
    console.log("Server is ready")
})
