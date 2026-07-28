import express, { response } from 'express'
const app=express()
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/profile',(req,res)=>{
    console.log(req)
    res.send("Your Profile Dashbord")
})
app.get('/profile/:user',(req,res)=>{
    let userId=req.params.user
    res.send(`Your Profile Dashbord ${userId}`)
})
app.listen(3000,()=>{
    console.log("Server is Running")
})
