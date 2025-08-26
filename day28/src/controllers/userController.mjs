import userModel from "../models/userModel.mjs";
const createUser = async (req, res)=>{
    try {
        const user=req.body;
        const createdUser= await userModel.create(user);
        return res.status(201).send({status:"ok", data:createdUser})
    } catch (error) {
        if(error.message.includes("duplicate")){
            return res.status(400).send({status:"failed", message:error.message})
        }else{
            return res.status(500).send({status:"failed", message:error.message})
        }
    }
}
const getUser=async (req,res)=>{
    try {
        const {lt,gt}=req.query;
        // const data= await userModel.find({age:{$eq:"25"}})
        // const data= await userModel.find({age:{$lt:lt}})
        // const data= await userModel.find();
        // const data= await userModel.findOne({email:email});
        // const data= await userModel.find({$and:[{age:{$lt:lt,$gte:gt}},{name:{$eq:"vikash"}}]})
        // const data= await userModel.find({$or:[{age:{$lt:lt,$gte:gt}},{name:{$eq:"vikash"}}]})
        // const data= await userModel.find({age:{$mod:[2,0]}})
        const data= await userModel.find({name:{$regex:/[A-Z]/}})
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