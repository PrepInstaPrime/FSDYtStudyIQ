import express from 'express';
import router from './src/routes/route.mjs';
const app= express();
app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send("hey this is testing")
// })
app.use('/',router);
app.listen(8000,()=>{
    console.log("servers stated at port 8000")
})