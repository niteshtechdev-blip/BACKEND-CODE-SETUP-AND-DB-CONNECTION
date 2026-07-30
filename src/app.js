import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import User from "./models/user.medel.js"
// const dotenv=require('dotenv').config()// configratiion in case of require (commonjs)
import dotenv from 'dotenv'
const app=express.Router()
import { uplodOnCloudinary } from './utils/cloudinary.js'

app.use(express.json())// for allow json in owr server
app.use(express.urlencoded({limit:"10kb"}))// for url data encode example nitesh saini== nitesh%20saini means %20 for space
app.use(express.static("public_assets_folder"))// for file that server find in given folder and serve directly ex- localhost:3000/img.jpg
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.post("/upload/img",uplodOnCloudinary("image"),(req,res,next)=>{
try {
    const {image} = req.body
    const data = User.create({
        image 
    })
    return res.status(200).json({
        message:"success"
    })
} catch (error) {
    return res.status(200).json({
        message:error.message
    })
}

    
})

app.use(cookieParser())
dotenv.config({            // dotenv configration when we import dotenv
    path:'./env'
})

app.listen(process.env.PORT)


export {app}

