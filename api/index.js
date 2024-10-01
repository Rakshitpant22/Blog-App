import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(
    ()=>{
        console.log("Mongo DB  is connected")
    }
).catch((error)=>{
    console.log(error)
})
const app=express();

app.listen(3000,()=>{
    console.log('server is listnening on port 3000');
});

