import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from 'express'

const cnnectToDB = async () => {
    try {
        const instance=await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`Connected to DB Host: ${instance.connection.host}`)
    } catch (error) {
        console.log("Error while connection to MongoDB", error)
    }
}
export default cnnectToDB;