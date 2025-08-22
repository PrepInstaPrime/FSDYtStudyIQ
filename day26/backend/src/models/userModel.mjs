import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    phone:String
},{timestamps:true});
export default mongoose.model("UserRegistration",userSchema);