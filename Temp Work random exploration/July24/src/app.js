import express from 'express'
const MyServer=express()
MyServer.get('/',(req,res)=>{
    console.log("Api is Calling")
    res.send("Welcome to Backend")
})
MyServer.get('/news',(request,response)=>{
    response.send({
        1:"CJP protest is going on",
        2:"Modi gives Statement",
        3:"Monsoon is on",
        4:"Yesterday is not summit"
    })
})
export{MyServer}