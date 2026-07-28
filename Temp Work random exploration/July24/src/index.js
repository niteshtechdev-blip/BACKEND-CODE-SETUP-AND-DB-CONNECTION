import mongoose from "mongoose";
import dotenv from 'dotenv';
import { MyServer } from "./app.js";
dotenv.config({
    path:"./env"
})
const connect=async ()=>{
    try {
        await mongoose.connect(`${process.env.DB}`)
        console.log("Success")
    } catch (error) {
        console.log(`Connection Faild ${error}`)
    }
    
}
connect()
.then(()=>{
    console.log("Your Connection to Mongodb is successfully done")
    MyServer.listen(process.env.PORT,()=>{
        console.log(`Website localhost:${process.env.PORT}/`)
        console.log(data)
    })
    MyServer.on('error',(error)=>{
        console.log(`Error occored: ${error}`)
        throw error
    })
})
.catch((err)=>{
    console.log("Error while Connecting to Mongodb")
})