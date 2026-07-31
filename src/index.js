import dotenv from "dotenv"
// import { connectDB } from "./db/db_connection.js"
import { app } from "./app.js"
dotenv.config({
    path:'./env'
})


app.listen(8080,(req,res)=>{
    console.log(`Server is running on= http://localhost:8080`)
})
// connectDB()
// WebServer.listen(`${process.env.PORT}`,()=>{
//     console.log("Server is ready")
// })
