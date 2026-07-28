import express from 'express'
import cookieParser from 'cookie-parser'

const cookieReq=express()
cookieReq.use(cookieParser());

export{ cookieReq}