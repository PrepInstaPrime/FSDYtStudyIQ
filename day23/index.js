const express = require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("hey i am from backend");
})
app.get('/intro', (req,res)=>{
    res.send("Hey i am gaurav pandey");
})
app.listen(8000,()=>{
    console.log("Server started at port 8000");
})