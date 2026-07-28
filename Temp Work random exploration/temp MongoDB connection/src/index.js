import connectToDB from './db/dbConnection.js'
import dotenv from 'dotenv';
import { app } from './app.js';
import { cookieReq } from '../temp.js';
dotenv.config({
    path:'./env'
})
connectToDB()
.then(()=>{
    app.listen(process.env.PORT||8080,()=>{
        console.log(`Server is ready`)
    })
})
.catch((err)=>{
    console.log(`Connection Faild ${err}`)
})

cookieReq.get('/',(req,res)=>{
    let c=req.cookies
    res.send(`cookies `)
})

cookieReq.listen(8080)