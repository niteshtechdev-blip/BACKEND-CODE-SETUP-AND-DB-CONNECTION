// require('dotenv').config({path:"./env"})

import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "../constants.js";

const connect =async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n connection success !! DB host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(error)
    }
};
export default connect;