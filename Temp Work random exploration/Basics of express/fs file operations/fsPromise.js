import fs from "fs/promises"

let a=await fs.readFile("notes.txt",(err,data)=>{
    // console.log(err,data)
})
console.log(a.toString())