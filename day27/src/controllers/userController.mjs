import userModel from "../models/userModel.mjs";
const createUser = async (req, res)=>{
    try {
        const {user1,user2}=req.body;
        console.log(user1, user2)
        const createdUser= await userModel.insertMany([user1,user2]);
        return res.send({status:"ok", data:createdUser})
    } catch (error) {
        if(error.message.includes("duplicate")){
            return res.send({status:"failed", message:error.message})
        }else{
            return res.send({status:"failed", message:error.message})
        }
    }
}
const getUser=async (req,res)=>{
    try {
        const {email}=req.query;
        const data= await userModel.find({email:email})
        // const data= await userModel.find();
        // const data= await userModel.findOne({email:email});
        return  res.send({status:"ok", data:data})
    } catch (error) {
        return res.send({status:"failed", message:error.message})
    }
}
const updateUser=async (req,res)=>{
    try {
        const {email, name}=req.body;
        const updatedData= await userModel.updateOne({email:email},{$set:{name:name}});
        return res.send({status:"ok", data:updatedData})
    } catch (error) {
         return res.send({status:"failed", message:error.message})
    }
}
const deleteUser= async (req,res)=>{
    try {
       const {email}=req.query;
        const updatedData= await userModel.deleteOne({email:email});
        return res.send({status:"ok", data:updatedData})
    } catch (error) {
         return res.send({status:"failed", message:error.message})
    }
}
export {createUser,getUser, updateUser, deleteUser}