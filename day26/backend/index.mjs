import express from 'express'
import mongoose from 'mongoose'
import { mongodbURI,port } from './config.mjs';
import router from './src/routes/route.mjs';
import cors from 'cors'
const app= express();
app.use(express.json());
app.use(cors())
mongoose.connect(mongodbURI).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(port||8080, ()=>{
    console.log(`server started on port ${port}`);
})
