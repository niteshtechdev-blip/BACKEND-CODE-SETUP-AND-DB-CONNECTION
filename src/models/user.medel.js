import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const userSchema = new Schema(
    {
        // userName: {
        //     type: String,
        //     required: true,
        //     unique: true,
        //     trim: true,
        //     lowercase: true,
        //     index: true
        // },
        // email: {
        //     type: String,
        //     required: true,
        //     unique: true,
        //     trim: true,
        //     lowercase: true,
        // },
        // fullName: {
        //     type: String,
        //     required: true,
        //     trim: true,
        // },
        // avatar: {
        //     type: String,// cloudnery url
        //     required: true
        // },
        // coverImage: { // cloudnery url
        //     type: String
        // },
        // watchHistory: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "Video"
        //     }
        // ],
        // password: {
        //     type: String,
        //     required: true
        // },
        // refreshToken: {
        //     type: String
        // }
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

// userSchema.pre("save",async function(next){
//     if(!this.isModified("password"))return next();
//     this.password= bcrypt.hash(this.password,10)
//     next()
// })
// userSchema.methods.isPasswodCorrect=async function (password) {
//     return await bcrypt.compare(password,this.password)
// }
// userSchema.methods.generateAccessToken=function(){
//     return jwt.sign(   //take parameters for create a access token and refresh token
//         {        //1=payloads, that field used to generate 
//             _id:this._id,      // _id is variable name and this._id accessed from database
//             username:this.userName,
//             email:this.email   //etc
//         },
//         //2= Secret key that we store in .env
//         process.env.ACCESS_TOKEN_SECRET,
//         {  // Token expiry time from .env 
//             expiresIn:process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
// }
// userSchema.methods.generateRefreshToken=function(){
//     return jwt.sign(   //take parameters for create a access token and refresh token
//         {        //1=payloads, that field used to generate 
//             _id:this._id,      // _id is variable name and this._id accessed from database
//         },
//         //2= Secret key that we store in .env
//         process.env.REFRESH_TOKEN_SECRET,
//         {  // Token expiry time from .env 
//             expiresIn:process.env.REFRESH_TOKEN_EXPIRY
//         }
//     )
// }

export const User = mongoose.model("User", userSchema)