// import express from "express"
// const app=express()
// const port=3000
import fs from "fs"

// function txtFile(fileName,text){
//     fs.writeFileSync(`${fileName}.txt`,text)
// }
// txtFile("demo","hello this is semple")

console.log(`before fs`)
// fs.writeFileSync("notes.txt","In this file all web notes are available soon")
fs.readFile("notes.txt",(error,data)=>{
        console.log(error,data.toString())
})
fs.appendFileSync("notes.txt","1. Web Dev,2. frontend, 3. backend")



// app.get("/",(req,res)=>{
//     console.log("Thank you")
//     res.send(`<h4>Welcome to sashb</h4>`)
// })
// app.listen(port,()=>{
//     console.log(`App is ready on : http://localhost:${port}`)
// })