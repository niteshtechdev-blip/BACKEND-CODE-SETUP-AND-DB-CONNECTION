import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
    try {
        let instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Success")
    }catch(err){
        console.log(`Error:${err}`)
    }
}
export{connectDB}