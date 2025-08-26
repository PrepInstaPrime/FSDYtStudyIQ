import express from 'express'
import mongoose from 'mongoose'
import { mongodbURI,port } from './config.mjs';
import router from './src/routes/route.mjs';
import bodyParser from 'body-parser';
const app= express();
// application level // builtin middleware
// app.use(express.json());
// third party middleware
app.use(bodyParser.json());
// custome level
app.use('/',(req,res,next)=>{
    let {user}=req.query;
    let username="karan"
    if(user===username){
        next();
    }else{
        return res.send("no authorised");
    }
})
mongoose.connect(mongodbURI).then(()=>console.log("database connected successfully")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(port||8080, ()=>{
    console.log(`server started on port ${port}`);
})
