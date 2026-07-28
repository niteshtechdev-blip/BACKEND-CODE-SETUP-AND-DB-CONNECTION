import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
// const dotenv=require('dotenv').config()// configratiion in case of require (commonjs)
import dotenv from 'dotenv'
const app=express()

app.use(express.json())// for allow json in owr server
app.use(express.urlencoded({limit:"10kb"}))// for url data encode example nitesh saini== nitesh%20saini means %20 for space
app.use(express.static("public_assets_folder"))// for file that server find in given folder and serve directly ex- localhost:3000/img.jpg
app.use(cors())
app.use(cookieParser())
dotenv.config({            // dotenv configration when we import dotenv
    path:'./env'
})