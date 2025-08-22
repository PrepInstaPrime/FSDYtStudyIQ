import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
const app= express();
app.use(express.json());
mongoose.connect(process.env.mongodb).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
app.get('/', (req,res)=>{
    res.send("api is running")
})
app.listen(process.env.port, ()=>{
    console.log("server started at port",process.env.port);
})